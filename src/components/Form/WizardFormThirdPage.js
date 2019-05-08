import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

// const renderCitySelector = ({ input, meta: { touched, error } }) => (
// 	<div>
// 		<select {...input}>
// 			<option value="">Select a City...</option>
// 			{cities.map(val => <option value={val} key={val}>{val}</option>)}
// 		</select>
// 		{touched && error && <span style={{ color: 'red' }}> &nbsp;&nbsp;{error}</span>}
// 	</div>
// )

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
				<div>
					<h4 className="w3-text-blue">Personal Details</h4>
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
				<br />
				<div>
					<button type="button" className="btn btn-secondary" onClick={previousPage}>Previous</button>&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
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