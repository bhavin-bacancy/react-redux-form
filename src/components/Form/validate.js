const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Please enter first name'
  }
  if (!values.lastName) {
    errors.lastName = 'Please enter last name'
  }
  if (!values.email) {
    errors.email = 'Please enter email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.gender) {
    errors.gender = 'Please select gender'
  }
  if (!values.city) {
    errors.city = 'Please select your city'
	}
	if (!values.address) {
			errors.address = 'Please enter address';
		}
  return errors
}

export default validate