import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initStore } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store = { initStore() }>		
		<App />
  	</Provider>,  
  document.getElementById('root')
);
