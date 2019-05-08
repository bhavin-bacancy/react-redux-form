import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const Styles = {
	wizard3: {
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
	numberWrapper: {
		color: 'black',
		float: 'right',
		fontSize: '15px',
		backgroundColor: 'gainsboro',
		height: '40px',
		width: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '30px',
	},
	titleWrapper: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},
	submitButton: {
		width: '88.3px',
	},
}

const dropdownArray = [{
	value: 0,
	label: 'Ahmedabad',
}, {
	value: 1,
	label: 'Baroda',
}, {
	value: 2,
	label: 'Surat',
}];

const WizardFormThirdPage = (props) => {
	const { handleSubmit, pristine, previousPage, submitting } = props

	const onCityChange = (event) => {
		props.change('city', event);
	};

	return (
		<div style={Styles.wizard3}>
			<form onSubmit={handleSubmit}>
				<div style={{ display: 'flex' }}>
					<h5 style={Styles.titleWrapper} className="w3-text-blue">Personal Details<span style={Styles.numberWrapper}>3/3</span></h5>
				</div>
				<div>
					<div>
						<Field
							name="address"
							type="textarea"
							component={renderField}
							label="Address"
							minRows={5} />
					</div>
				</div>
				<div>
					<Field
						name="city"
						type="select"
						selected={props.type}
						onChange={onCityChange}
						dropdownArray={dropdownArray}
						component={renderField}
						label="City"
						placeholder={'Select city'}
					/>
				</div>
				<div>
					<button type="button" className="btn btn-secondary" onClick={previousPage}>Previous</button>&nbsp;&nbsp;&nbsp;
       		<button style={Styles.submitButton} type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
				</div>
			</form>
		</div>
	)
}
export default reduxForm({
	form: 'wizard', //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
	validate
})(WizardFormThirdPage)