import React from 'react'
import {FormButton} from './styles'
import {logout} from './firebase/api'

export default function AuthenticatedApp(props) {
  return <FormButton onClick={() => logout()}>Logout</FormButton>
}
