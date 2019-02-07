// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const app = new App();
  const div = document.createElement('div');

  ReactDOM.render(app.render(), div);
  ReactDOM.unmountComponentAtNode(div);
});
