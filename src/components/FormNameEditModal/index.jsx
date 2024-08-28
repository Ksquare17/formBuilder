import React from 'react';
import { Modal, Button, TextField, Box, Typography } from '@mui/material';

const FormNameEditorModal = ({
  open,onClose,
  title = 'Create',
  formName = '',
  setFormName = () => {},
  isModalOpen = false,
  onSubmit = () => {},
  isError = false,
}) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography id="modal-title" variant="h6" component="h2">
        {title + ' Feedback Form'}
      </Typography>
      <TextField
        id="form-name"
        label="Form Name"
        variant="outlined"
        fullWidth
        placeholder="Enter Form Name"
        value={formName}
        error={isError}
        helperText={isError ? 'Form name is required' : ''}
        sx={{ mb: 2 }}
        onChange={(e) => {
          setFormName(e.target.value)
          
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          {title}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Modal>
);

export { FormNameEditorModal };
