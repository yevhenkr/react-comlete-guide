import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    person: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  swithNameHandler = (newName) => {
    // console.log('Was clicked ');
    //DON'T DO THIS:  state.person[0].name = 'Maximilian';
    this.setState({
      person: [
        { name: newName, age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '27' },
      ]
    })
  }

  nameChangehandler = (event) => {
    this.setState({
      person: [
        { name: 'Max', age: '28' },
        { name: event.target.value, age: '29' },
        { name: 'Stephanie', age: '26' }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.swithNameHandler.bind(this, 'Max')}
            changed={this.nameChangehandler}
          >My hobies recing</Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is realy working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!' ));
  }
}


export default App;