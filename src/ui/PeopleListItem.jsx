import React from 'react';

const PeopleListItem = (props) => {
  return (
    <li className="person">
      <div className="person__avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="person__details">
        <h1 className="person__firstName">{props.firstName}</h1>
        <span className="person__lastName">{props.lastName}</span>
      </div>
    </li>
  );
};

export default PeopleListItem;
