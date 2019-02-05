import React, { Component } from 'react';

import PeopleList from './layout/PeopleList';

import './App.css';
import Form from './components/forms/Form';
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false,
  };
  
  render() {
    return (
      <div>
        <Form />
        <PeopleList perPage={3} />
  
        {
          this.state.showModal ?
          <Modal position="left">
            <h1>Sign up today!</h1>
            <label>
              First name
              <input />
            </label>
          </Modal>
          : null
        }
      </div>
    );
  }
  
}

export default App;
