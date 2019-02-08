import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = {
    persons: [
      {name: 'Kristaps', age: 23},
      {name: 'Luka', age: 19},
      {name: 'Dennis', age: 20}
    ],
    otherState: 'some other value'
  }

  clickHandler = () => {
    this.setState({
      persons: [
        {name: 'Kristaps Porzingis', age: 23},
        {name: 'Luka Doncic', age: 19},
        {name: 'Dennis Smith Jr.', age: 20}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Kristaps Porzingis', age: 23},
        {name: event.target.value, age: 19},
        {name: 'Dennis Smith Jr.', age: 20}
      ]
    })
  }

    render() {
      return (
        <div className="App">
          <button onClick={this.clickHandler}>Switch Name</button>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.clickHandler}
              />
            <Person
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.clickHandler}
              changed={this.nameChangeHandler}
              />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.clickHandler}
              />
        </div>
      )
    }
}

export default App;


