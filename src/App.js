import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/main.scss';

function DemoApp() {
  return (
    <Router>
      <div className='container'>
        <main className='content'>
          <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>
            <Route path='/Register'>
              <Register/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default DemoApp;
