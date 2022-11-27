import React from 'react';
import axios from 'axios';

//Method GET
///////////////////////
export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return ( 
        console.log(this.state.persons.map(person => person.name))
    )
  }
}


//Methode POST
///////////////////////