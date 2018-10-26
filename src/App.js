import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dashboard />
      <Form />
      <Header />

      </div>
    );
  }
}

export default App;
