import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' },
    ],
    otherState: 'some other value'
  }

  swithNameHandler = () => {
    // console.log('Was clicked ');
    //DON'T DO THIS:  this.state.person[0].name = 'Maximilian';

    this.setState({
      person: [
        { name: 'Maximilian', age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '27' },
      ]
    } )
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is realy working!</p>
        <button onClick={this.swithNameHandler}>Switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >My hobies recing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!' ));

  }
}

export default App;
