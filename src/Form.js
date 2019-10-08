import React from 'react'
import {FormGroup, FormContainer, Input, FormButton, ButtonGroup, Error, Title} from './styles'
import {useForm} from './hooks/useForm'
import {useAuth} from './contexts/auth-context'

function Form() {
  const {loggingin, registering} = useAuth()
  const {values, errors, handleChange, handleSubmit} = useForm(loggingin, registering)

  return (
    <FormContainer noValidate>
      <Title>UseForm Hook</Title>
      <FormGroup>
        <label htmlFor='email'>Email</label>
        <Input
          isValid={!Boolean(errors.email)}
          type='email'
          name='email'
          value={values.email.value}
          onChange={handleChange}
          required
        />
        {!!errors.email && <Error>{errors.email}</Error>}
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <Input
          isValid={!Boolean(errors.password)}
          type='password'
          name='password'
          value={values.password.value}
          onChange={handleChange}
          required
        />
        {!!errors.password && <Error>{errors.password}</Error>}
      </FormGroup>
      <ButtonGroup>
        <FormButton name='login' onClick={handleSubmit} isLogin type='submit'>
          Login
        </FormButton>
        <FormButton name='register' onClick={handleSubmit} type='submit'>
          Register
        </FormButton>
      </ButtonGroup>
    </FormContainer>
  )
}

export default Form
