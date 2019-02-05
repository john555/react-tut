import React, { Component } from 'react';
import Switch from './Switch';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rememberMe: false,
    };

  }

  toggleRememberMe = () => {
    this.setState({
      rememberMe: !this.state.rememberMe,
    });
  };

  render() {
    return (
      <div className="Form">
        <Switch onClick={this.toggleRememberMe} isChecked={this.state.rememberMe} />
      </div>
    );
  }
}


export default Form;
