import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'; // Do the same thing to import the other pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
