import React, { Component } from 'react';

import './Modal.css';


class Modal extends Component {

  positions = {
    right: 'Modal__right',
    left: 'Modal__left',
  };

  componentWillMount() {
    document.body.classList.add('no-scroll');
  }

  componentWillUnmount() {
    document.body.classList.remove('no-scroll');
  }

  render () {
    const { children, position } = this.props;

    return (
      <div className={`Modal ${this.positions[position]}`}>
        <div className="ModalContent">
          {children}
        </div>
      </div>
    );
  }
  }


export default Modal;
