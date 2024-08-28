import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Button, Modal, Card, Typography, Box } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { AdminNav } from '../../components/AdminNav';
import { FormNameEditorModal } from '../../components/FormNameEditModal';
import { NewCard } from '../../components/NewCard';
import { useFirestore } from '../../hooks/useFirestore';
import { db } from '../../utils/firebase';
import { PageRoutes } from '../../utils/PageRoutes';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [isError, setIsError] = useState(false);
  const { getAllDocuments, deleteDocument, loading } = useFirestore('forms');
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      const allForms = await getAllDocuments();
      setForms(allForms);
    };
    fetchForms();
  }, [getAllDocuments]);

  const handleViewForm = (formId) => {
    navigate(PageRoutes.formDetails.replace(':id', formId));
  };

  const handleEditForm = (formId) => {
    navigate(PageRoutes.newForm.replace(':id', formId));
  };

  const handleDeleteForm = async (formId) => {
    await deleteDocument(formId);
    const updatedForms = forms.filter((form) => form.id !== formId);
    setForms(updatedForms);
  };

  const handleCreateForm = () => {
    setIsModalOpen(true);
  };

  const handleSubmitForm = async () => {
    if (!formName) {
      setIsError(true);
      return;
    }

    const formData = {
      name: formName,
      createdAt: Timestamp.now(),
    };

    try {
      const docRef = await addDoc(collection(db, 'forms'), formData);
      navigate(PageRoutes.newForm.replace(':id', docRef.id));
    } catch (error) {
      console.error('Error creating form: ', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <section>
      <AdminNav />
      <Box
        sx={{
          padding: '30px',
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          
        }}
      >
        <NewCard
          
          handleClick={handleCreateForm}
        />
          {/* <Button variant="contained" color="primary">
            Create New Form
          </Button>
        </Card> */}
        {forms.map((form) => (
          <Card
            key={form.id}
            sx={{
              width: '250px',
              aspectRatio: '1.2/1.6',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              padding: 0,
            }}
          >
            <Box
              sx={{
                background: '#f5d563',
                padding: '10px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6">{form.name}</Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                padding: '0 20px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                }}
              >
                {form.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#8e8e8e',
                  }}
                >
                  Created At:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {new Date(form.createdAt.seconds * 1000).toLocaleDateString()}
                </Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: '#9c27b0',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#7b1fa2',
                  },
                }}
                fullWidth
                onClick={() => handleViewForm(form.id)}
              >
                View
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#1b5e20',
                    },
                  }}
                  onClick={() => handleEditForm(form.id)}
                >
                  Edit
                </Button>
                <Button
                  sx={{
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#c62828',
                    },
                  }}
                  onClick={() => handleDeleteForm(form.id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
        <Box sx={{display:'flex',
        justifyContent:'center',
        alignItems:'center'}}>
       
          <FormNameEditorModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
            formName={formName}
            setFormName={setFormName}
            onSubmit={handleSubmitForm}
            onCancel={() => {
              setIsModalOpen(false);
              setFormName('');
              setIsError(false);
            }}
            isError={isError}
          />
       
        </Box>
      </Box>
    </section>
  );
};

export { Dashboard };
