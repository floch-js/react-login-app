type ValidatorFunction = (value: string) => string | undefined;

export const validateEmail: ValidatorFunction = (value) => {
  if (!value) return 'Required';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    return 'Invalid email address';
};

export const validatePassword: ValidatorFunction = (value) => {
  if (!value) return 'Required';
  if (value.length < 8) return 'Password must be at least 8 characters';
};
