import React from 'react'
import { Field, reduxForm } from 'redux-form';
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
	<span style={{ color: 'red' }}> &nbsp;&nbsp;{error}</span> : false

const Styles = {
	wizard2: {
		marginRight: 'auto',
		padding: '32px',
		marginTop: '1rem',
		marginLeft: 'auto',
		maxWidth: '450px',
		minHeight: 'auto',
		backgroundColor: 'white',
		border: '1px solid lightgrey',
		borderRadius: '20px',
		boxShadow: 'rgba(50, 50, 93, 0.1) 0px 15px 35px, rgba(0, 0, 0, 0.07) 0px 5px 15px'
	},
}

const WizardFormSecondPage = (props) => {
	const { handleSubmit, previousPage } = props
	return (
		<div style={Styles.wizard2}>
			<div>
				<h4 className="w3-text-blue">Personal Details</h4>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name="email"
						type="email"
						component={renderField}
						label="Email" />
				</div>
				<div>
					<label>Gender</label>
					<div>
						<Field name="gender" component="input" type="radio" value="male" /> Male &nbsp;&nbsp;
					<Field name="gender" component="input" type="radio" value="female" /> Female
					<Field name="gender" component={renderError} />
					</div>
				</div>
				<br />
				<div>
					<button type="button" className="btn btn-secondary" onClick={previousPage}>Previous</button>&nbsp;&nbsp;&nbsp;
					<button type="submit" className="btn btn-primary">Next</button>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({
	form: 'wizard',  //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
	validate
})(WizardFormSecondPage)