import React, { Component } from 'react'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
	}
	
	onSubmit = (formData) => {
		console.log('Submit called...', formData);
	}

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
	}

  render() {
    const { page } = this.state
    return (<div>
				<h4 style={{ textAlign:'center', color:'darkred', paddingTop:'20px' }}> New Account </h4>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
      </div>
    )
  }
}

export default WizardForm