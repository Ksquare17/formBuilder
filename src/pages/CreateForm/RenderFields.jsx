import React from 'react'; // Import React explicitly
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid is imported for generating unique IDs
import { availableFields } from './fields';
import AddIcon from '@mui/icons-material/Add';
import { Button, Card, Container, Divider, Box,Stack,FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField, Typography } from '@mui/material';
import Plus from '../../assets/plusIcon.svg';
 const RenderFields = ({fields,setFields}) => {
  
  return (
  <Stack direction="column" gap="2px" p={2}>
    <Typography variant="h4" style={{ fontWeight: '500' }}>
      Add Fields
    </Typography>
  
    {availableFields.map((field) => (
      <Stack key={field.type} sx={{padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center', flexDirection:'row'}}>
        <Stack
          sx={{ flex: 1,
            gap: '10px',
            cursor: 'pointer',flexDirection:'row'}}
          onClick={() => {
            if (fields.length < 7) {
              setFields([...fields, { id: uuidv4(), index: (fields?.length || 0) + 1, type: field.type }]);
            } else {
              alert('You can add only 7 fields');
            }
          }}
        >
          <img src={field.icon} />
          <Typography>{field.label}</Typography>
        </Stack>
        <img src={Plus} style={{ height: '15px' }} />
      </Stack>
    ))}
  </Stack>
  )
 }

export default RenderFields;