import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state ={
    person:[
     {name: 'Max', age:'28'},
     {name: 'Manu', age:'29'},
     {name: 'Stephanie', age:'26'},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is realy working!</p>
        <button>Switch name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >My hobies recing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div> 
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!' ));

  }
}

export default App;
