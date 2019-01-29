import React from 'react';
import PeopleListItem from '../ui/PeopleListItem';

class PeopleList extends React.Component {
  state = {
    people: [
      {
        "id": 1,
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
        "id": 2,
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
        "id": 3,
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      },
      {
        "id": 4,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        "id": 5,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        "id": 6,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      },
    ],
  };
  render() {
    
    return (
      <ul className="people">
        {
          this.state.people.map(person => {
            return (
              <PeopleListItem
                key={person.id}
                avatar={person.avatar}
                firstName={person.first_name}
                lastName={person.last_name}
              />
            );
          })
        }
        
      </ul>
    );
  }
}

export default PeopleList;
