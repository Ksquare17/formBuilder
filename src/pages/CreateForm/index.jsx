import React, { useEffect, useState } from 'react';
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { Button, Card, Container, Stack, FormControlLabel, Switch, TextField, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import BackIcon from '../../assets/back.svg';
import greyDelete from '../../assets/greyDelete.svg';
import greyEdit from '../../assets/greyEdit.svg';
import whiteBack from '../../assets/whiteBack.svg';
import whiteEdit from '../../assets/whiteEdit.svg';
import { AdminNav } from '../../components/AdminNav';
import { FormNameEditorModal } from '../../components/FormNameEditModal';
import { useFirestore } from '../../hooks/useFirestore';
import RenderFields from './RenderFields';
import FormLogics from './FormLogics';
import { SortableItem } from './SortableField';


const CreateForm = () => {
  const [editField, setEditField] = useState(null);
  const [fields, setFields] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  
  const [formData, setFormData] = useState({});
  const { getDocument, updateDocument, loading } = useFirestore('forms');
  const { id: formId } = useParams();
  const navigate = useNavigate();

  const getFormData = async () => {
    if (!formId) return;
    const form = await getDocument(formId);
    setFormData(form);
    setFields(form?.fields || []);
    setFormName(form?.name || '');
  };

  useEffect(() => {
    getFormData();
  }, [formId]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFields((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
 
  const handleRename = async () => {
    if (formName === '') {
      alert('Please enter a form name');
      return;
    }
    await updateDocument(formId, { ...formData, name: formName });
    setFormData({ ...formData, name: formName })
    setModalOpen(false);
  };

 

  const handleUpdate = async (isPublished = false) => {
    if (fields.length === 0) {
      alert('Please add fields to the form');
      return;
    }
    const data = {
      ...formData,
      fields,
      name: formName || formData?.name,
      isPublished: !!isPublished,
    };
    await updateDocument(formId, data);
    if (isPublished) {
      navigate('/dashboard');
    } else {
      getFormData();
    }
  };

  const handleEditFieldClick = (item) => {
    setEditField(item);
  };

  const handleSaveField = (event) => {
    event.preventDefault();
    const updatedFields = fields.map((field) =>
      field.id === editField.id ? { ...editField } : field
    );
    setFields(updatedFields);
    setEditField(null);
  };

  const handleFieldOptionChange = (index, value) => {
    const newOptions = [...(editField.options || [])];
    newOptions[index] = value;
    setEditField({ ...editField, options: newOptions });
  };

  return (
    <>
      <AdminNav onSave={() => handleUpdate()} onPublish={() => handleUpdate(true)} />
      <main style={{ display: 'flex', flexDirection: 'row', padding:'10px', justifyContent:'space-around' }}>
        <Box sx={{ width: '60vw', justifyContent: 'center' }}>
          <Card sx={{ width: '70%', height: '80vh', margin: '20px 0', overflowY: 'auto' }}>
            <Box sx={{ background: '#5578f4', color: 'white', padding: '10px', alignItems: 'center', gap: '10px' }}>
              <Box onClick={() => navigate('/dashboard')}>
                <img src={whiteBack} alt="Back" />
              </Box>
              <Stack sx={{flexDirection:'row', justifyContent:'space-between'}}>
              <Typography variant="h6" sx={{ width: '70%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {formData?.name || 'Form Name'}
              </Typography>
              <img onClick={() => setModalOpen(true)} src={whiteEdit} alt="Edit" style={{ width: '1.2rem' }} />
              </Stack>
            </Box>
            {fields.length > 0 ? (
              <Stack direction="column" gap="10px" sx={{ padding: '20px 10px' }}>
               
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                  <SortableContext items={fields.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                    {fields.map((item) => (
                      <Card key={item.id} onClick={() => setEditField(item)} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0 5px 5px' }}>
                        <SortableItem key={item.id} id={item.id} field={item} />
                        <Box justifyContent="flex-end" gap="15px">
                          <img src={greyEdit} style={{ width: '1.2rem' }} alt="Edit" onClick={() => handleEditFieldClick(item)} />
                          <img src={greyDelete} alt="Delete" onClick={() => setFields(fields.filter((field) => field.id !== item.id))} />
                        </Box>
                      </Card>
                    ))}
                  </SortableContext>
                </DndContext>
              </Stack>
            ) : (
              <Box sx={{ justifyContent: 'center', alignItems: 'center', height: '100%', padding:'16px' }}>
                <Typography variant="h5" sx={{ fontWeight: '600', color: '#5c5858' }}>
                  Add Fields
                </Typography>
              </Box>
            )}
          </Card>
        </Box>
        <Box sx={{ width: '30vw', padding: '10px' }}>
          <Card sx={{ minHeight: 'calc(100vh - 80px)', width: '100%' }}>
            {editField?.id ? (
              <Stack direction="column" gap="20px"style={{padding:'12px'}}>
                <Box sx={{ cursor: 'pointer', padding: '10px 10px', gap: '10px' }} onClick={() => setEditField(null)}>
                  <img src={BackIcon} alt="Back" />
                  <Typography variant="h6" sx={{ fontWeight: '500' }}>
                    Back to Add Fields
                  </Typography>
                </Box>
                <form onSubmit={handleSaveField} >
                  <Stack direction="column" gap="15px">
                    <TextField
                      label="Label"
                      value={editField.label}
                      onChange={(e) => setEditField({ ...editField, label: e.target.value })}
                    />
                    <FormControlLabel
                      control={<Switch checked={editField.isRequired} onChange={(e) => setEditField({ ...editField, isRequired: e.target.checked })} />}
                      label="Required"
                    />
                    {(editField?.type === 'radio' || editField?.type === 'categories') && (
                      <Stack direction="column">
                        <Typography>Options</Typography>
                        {Array.from({ length: 3 }, (_, index) => (
                          <TextField
                            key={index}
                            label={`Option ${index + 1}`}
                            value={editField.options?.[index] || ''}
                            onChange={(e) => handleFieldOptionChange(index, e.target.value)}
                          />
                        ))}
                      </Stack>
                    )}
                   <TextField
                      label="Error Message"
                      value={editField.errorMessage}
                      onChange={(e) => setEditField({ ...editField, errorMessage: e.target.value })}
                    />
                    <Box gap="10px">
                      <Button type="submit" variant="contained">Save</Button>
                      <Button color="error" onClick={() => setEditField(null)}>Cancel</Button>
                    </Box>
                  </Stack>
                </form>
              </Stack>
            ) : (
              <Box>
                <Stack direction="column" gap="40px">
                <RenderFields fields={fields} setFields={setFields} />
                <FormLogics formData={formData} setFormData={setFormData} />
              </Stack>
              </Box>
            )}
          </Card>
        </Box>
      </main>
      <FormNameEditorModal formName={formName} open={isModalOpen} setFormName={setFormName} onSubmit={handleRename}onClose={() => setModalOpen(false)}  />
    </>
  );
};

export default CreateForm;
