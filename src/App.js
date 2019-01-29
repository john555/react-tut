import React from 'react';

import PeopleList from './layout/PeopleList';

import './App.css';


const App =  (props) => {
  return (
    <div>
      <PeopleList perPage={3} />
    </div>
  );
};

export default App;
