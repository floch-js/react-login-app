import type { FC } from 'react';
import type { FieldProps } from 'formik';
import TextField from '@mui/material/TextField';

const CustomTextField: FC<FieldProps> = ({ field, form, ...props }) => {
  const errorText =
    form.touched[field.name] && form.errors[field.name]
      ? (form.errors[field.name] as string)
      : '';

  return (
    <TextField
      {...field}
      {...props}
      error={!!errorText}
      helperText={errorText || ' '}
    />
  );
};

export default CustomTextField;
