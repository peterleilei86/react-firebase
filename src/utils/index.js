export function validate(field, value) {
  let errors = {[field]: ''}
  if (!value) {
    errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required!`
    return errors
  }

  if (field === 'email' && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors[field] = 'Please provide a valid email address!'
  }

  if (field === 'password' && value.length < 8) {
    errors[field] = `Password must be more than 8 characters!`
  }
  return errors
}
