import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
import WizardForm from './components/Form/WizardForm';

const store = configureStore({});

ReactDOM.render(
<Provider store={store}>
	<WizardForm />
</Provider>, document.getElementById('root'));
