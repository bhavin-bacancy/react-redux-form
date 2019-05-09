import React, { Component } from 'react'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import WizardDisplayForm from './WizardDisplayForm'

const Styles = {
	headingWrapper: {
		textAlign:'center',
		color:'darkred',
		paddingTop:'20px',
	},
}
class WizardForm extends Component {
	constructor(props) {
		super(props)
		this.nextPage = this.nextPage.bind(this)
		this.previousPage = this.previousPage.bind(this)
		this.state = {
			page: 1,
			formData: {}
		}
	}

	onSubmit = (Data) => {
		this.setState({
			formData: Data,
			page: this.state.page + 1,
		})
	}

	nextPage() {
		this.setState({ page: this.state.page + 1 })
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 })
	}

	render() {
		const { page, formData } = this.state
		return (<div>
			{page !== 4 && <h4 style={Styles.headingWrapper}> Create an account </h4>}
			{page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
			{page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
			{page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={this.onSubmit} />}
			{page === 4 && Object.keys(formData).length > 0 && <WizardDisplayForm formData={formData} />}
		</div>
		)
	}
}

export default WizardForm