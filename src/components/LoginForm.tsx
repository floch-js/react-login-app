/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Formik, Form, Field, type FormikHelpers } from 'formik';
import { Button, Card as MuiCard, Box } from '@mui/material';
import Icon from '@mui/icons-material/CatchingPokemonSharp';
import styled from '@emotion/styled';
import CustomTextField from './CustomTextField';
import { validateEmail, validatePassword } from '../validations';

interface FormValues {
  email: string;
  password: string;
}

const handleSubmit = (_: FormValues, actions: FormikHelpers<FormValues>) => {
  setTimeout(() => {
    actions.setSubmitting(false);
  }, 1000);
};

const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const Card = styled(MuiCard)({
  textAlign: 'center',
  width: 500,
  maxWidth: '90%',
  padding: '1em 2em',
});

const fieldCss = {
  margin: '0.2em 0',
};

const LoginForm: FC = () => {
  return (
    <Container>
      <Card>
        <Icon color="primary" css={{ fontSize: '3.5em', margin: '.4em' }} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, touched, errors }) => (
            <Form>
              <Field
                name="email"
                type="email"
                label="Email"
                component={CustomTextField}
                validate={validateEmail}
                fullWidth
                css={fieldCss}
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={CustomTextField}
                validate={validatePassword}
                fullWidth
                css={fieldCss}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  Object.keys(touched).length === 0 ||
                  Object.values(errors).length > 0
                }
                fullWidth
                css={{ margin: '1em 0' }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default LoginForm;
