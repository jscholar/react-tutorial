import React from 'react';
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium'

import classes from './App.module.css';


class App extends React.Component {
  state = {
    persons: [
      {id: '1klj4l1k', name: 'Kristaps', age: 23},
      {id: '13kj4h6uig', name: 'Luka', age: 19},
      {id: 'as7dt6f789', name: 'Dennis', age: 20}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // slice call is important to avoid mutation of original state.
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex] // create a new object with copies of the properties of orginial object.
    }
    person.name = event.target.value;
    
    const persons = [...this.state.persons]; // Create copy of persons array to set as new state property
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) =>
          <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
          />
        )}
      </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2 ) {
      assignedClasses.push(assignedClasses.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(assignedClasses.bold);
    }

    return (
      <StyleRoot>
      <div className={classes.App}>
      <p className={assignedClasses.join(' ')}>Persons</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
