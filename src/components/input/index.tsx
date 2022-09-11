import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({id, name,label, onChange,value,inputprops}) {
  
  console.log(id)
  return (
      <TextField
        id={id}
        name ={name}
        label={label}
        onChange = {onChange}
        value = {value === 0 ? '' : value}
        // inputProps = {inputprops}
        variant="outlined"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        // placeholder = 'Enter Number'
       />
  );
}