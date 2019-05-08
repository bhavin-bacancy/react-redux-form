import React from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from './validate';
import renderField from './renderField'

const Styles = {
	wizard1: {
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

const WizardFormFirstPage = (props) => {
	const { handleSubmit } = props
	return (
		<div style={Styles.wizard1}>
			<div>
				<h4 className="w3-text-blue">Personal Details</h4>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name="firstName"
						type="text"
						component={renderField}
						label="First Name" />
				</div>
				<div>
					<Field
						name="lastName"
						type="text"
						component={renderField}
						label="Last Name" />
				</div>
				<br />
				<div>
					<button type="submit" className="btn btn-primary">Next</button>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({
	form: 'wizard',                 // <------ same form name
	destroyOnUnmount: false,        // <------ preserve form data
	forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
	validate
})(WizardFormFirstPage)