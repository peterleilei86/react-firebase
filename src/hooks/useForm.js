import React, {useState, useEffect} from 'react'
import {validate} from '../utils'

export function useForm(loggingin, registering) {
  const [values, setValues] = useState({
    email: {value: '', isInitial: true},
    password: {value: '', isInitial: true}
  })

  const login = React.useCallback((email, password) => loggingin(email, password), [loggingin])
  const register = React.useCallback((email, password) => registering(email, password), [
    registering
  ])

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [type, setType] = useState('')

  useEffect(() => {
    if (!values.email.isInitial) {
      setErrors(errors => ({...errors, ...validate('email', values.email.value)}))
    }

    if (!values.password.isInitial) {
      setErrors(errors => ({...errors, ...validate('password', values.password.value)}))
    }
  }, [values])

  useEffect(() => {
    ;(async () => {
      if (isSubmitting && Object.values(errors).every(v => !v)) {
        console.log('hihi')
        const user =
          type === 'login'
            ? await login(values.email.value, values.password.value)
            : await register(values.email.value, values.password.value)
        console.log(user)
      }
    })()
  }, [isSubmitting, errors, type, values, login, register])

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(errors => ({
      ...validate('email', values.email.value),
      ...validate('password', values.password.value)
    }))
    setType(e.target.name)
    setIsSubmitting(true)
  }

  const handleChange = e => {
    e.persist()
    setValues(values => ({...values, [e.target.name]: {value: e.target.value, isInitial: false}}))
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange
  }
}
