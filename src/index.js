import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './styles/css/index.css';
import Home from './Home';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(	
	<Router>
		<div>
		  <Route exact path="/" component={ Home }/>
		  <Route path="/list" component={ App }/>
	  </div>
  </Router>
	, document.getElementById('root'));
registerServiceWorker();
