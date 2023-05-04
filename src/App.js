import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  console.log(this);

  const swithNameHandler = (newName) => {
    // console.log('Was clicked ');
    //DON'T DO THIS:  personsState.person[0].name = 'Maximilian';
    setPersonsState({
      person: [
        { name: newName, age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '27' },
      ],

      otherState: personsState.otherState
    });
  };

  const nameChangehandler = (event) => {
    setPersonsState({
      person: [
        { name: 'Max', age: '28' },
        { name: event.target.value, age: '29' },
        { name: 'Stephanie', age: '26' }
      ],
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is realy working!</p>
      <button 
      style={style}
      onClick={() => swithNameHandler('Maximilian!!!')}>Switch name</button>
      <Person
        name={personsState.person[0].name}
        age={personsState.person[0].age} />
      <Person
        name={personsState.person[1].name}
        age={personsState.person[1].age}
        click={swithNameHandler.bind(this, 'Max')}
        changed={nameChangehandler}
      >My hobies recing</Person>
      <Person
        name={personsState.person[2].name}
        age={personsState.person[2].age} />
    </div>
  );
  // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!' ));
}


export default App;