import React from 'react'; // Import React explicitly
import { Flex, Text, Input, Switch, TextInput } from '@mantine/core';

const FormLogics = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Flex direction="column" style={{padding:'12px'}}>
      <Text size="xl" style={{ fontWeight: '500' }}>
        Add Logic
      </Text>
      <div>
        <Switch
          name="urlEnabled"
          checked={formData?.urlEnabled || false}
          onChange={handleInputChange}
          labelPosition="left"
          label="Show based on URL conditions"
        />
        <TextInput
          name="url"
          value={formData?.url || ''}
          onChange={handleInputChange}
          placeholder="https://"
        />
      </div>
      <Switch
        name="dateEnabled"
        checked={formData?.dateEnabled || false}
        onChange={handleInputChange}
        labelPosition="left"
        label="Show on a specific date"
      />
      <Input
        name="date"
        value={formData?.date || ''}
        onChange={handleInputChange}
        type="date"
      />
      <Switch
        name="timeEnabled"
        checked={formData?.timeEnabled || false}
        onChange={handleInputChange}
        labelPosition="left"
        label="Show on a specific time"
      />
      <Input
        name="time"
        value={formData?.time || ''}
        onChange={handleInputChange}
        type="time"
      />
    </Flex>
  );
};

export default FormLogics;
