import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [ (value) => value.includes('@'), 'El Correo debe tener un @'],
  password: [ (value) => value.length >= 6, 'La contraseña debe de tener mas de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es requerido']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const {displayName, email, password,
        onInputChange, formState, isFormValid, 
        displayNameValid, emailValid, passwordValid}= useForm( formData, formValidations )

  const [formSubmitted, setFormSubmitted] = useState( false );

  const {status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted( true );

    if (!isFormValid) return;
    
    dispatch( startCreatingUserWithEmailPassword(formState) );
  }
  return (

    <AuthLayout title='Register'>

      <form onSubmit={onSubmit}>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Nombre Completo' name='displayName' value={ displayName } onChange={ onInputChange } type='text' placeholder="Tu Nombre" fullWidth error={ !!displayNameValid && formSubmitted } helperText={ displayNameValid } />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Correo' type='email' placeholder="google@gmail.com" fullWidth name='email' value={ email } onChange={ onInputChange } error={ !!emailValid && formSubmitted } helperText={ emailValid }/>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label='Contraseña' type='password' placeholder="contraseña" fullWidth name='password' value={ password } onChange={ onInputChange } error={ !!passwordValid && formSubmitted  } helperText={ passwordValid }/>
          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt:2}}>
            <Grid item xs={12} sm={12} display={ errorMessage ? '' : 'none' }>
              <Alert severity='error'>{ errorMessage } </Alert>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button type='submit' variant="contained" disabled={ isCheckingAuthentication } fullWidth>Crear Cuenta</Button>
            </Grid>

          </Grid>

          <Grid container direction={'row'} justifyContent={'end'} >
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Ingresar
            </Link>
            
          </Grid>
        </Grid>
        
      </form>

    </AuthLayout>
  )
}
