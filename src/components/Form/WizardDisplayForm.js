import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

const Styles = {
	wizard4: {
		marginRight: 'auto',
		padding: '32px',
		marginTop: '1rem',
		marginLeft: 'auto',
		maxWidth: '550px',
		minHeight: 'auto',
		backgroundColor: 'white',
		border: '1px solid lightgrey',
		borderRadius: '20px',
		boxShadow: 'rgba(50, 50, 93, 0.1) 0px 15px 35px, rgba(0, 0, 0, 0.07) 0px 5px 15px'
	},
}
class WizardDispalyForm extends Component {
	render() {
		const { formData } = this.props;
		return (
			<div style={Styles.wizard4}>
				<div>
					<h4 className="w3-text-blue w3-center"> Congratulations, {formData.firstName} {formData.lastName} <p>Your account has been registered...!!! </p></h4>
					<h6><b>Email ID : </b> {formData.email}</h6>
					<h6><b>Gender : </b> {formData.gender}</h6>
					<h6><b>Address : </b> {formData.address}</h6>
					<h6><b>City : </b> {formData.city.label}</h6>
				</div>
			</div>
		)
	}
}
export default reduxForm({
	form: 'wizard',                 // <------ same form name
	destroyOnUnmount: false,        // <------ preserve form data
	forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(WizardDispalyForm)


