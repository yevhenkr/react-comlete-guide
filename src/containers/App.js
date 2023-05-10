import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Сomponents/Persons/Persons';
import Cockpit from '../Сomponents/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary'



class App extends Component {

  constructor(props) {
    super(props);
    console.log('[app.js] constructor');
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: '28' },
      { id: 'vasdf1', name: 'Manu', age: '29' },
      { id: 'asdf11', name: 'Stephanie', age: '26' }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[app.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[app.js] componentWillMount');
  // }
  componentDidMount() {
    console.log('[app.js] componentDidMount');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; //true, если условие выполнено то возвращает index
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person =Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    console.log('[app.js] render ');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
      <Aux classes={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
        <Cockpit
          title={this.props.appTitle}
          showperson={this.state.showPersons}
          personsLenght={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        ): null }
        {persons}
      </Aux>
    );
    // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!' ));
  }
}


export default withClass(App, classes.App);