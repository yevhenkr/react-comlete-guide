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

  const swithNameHandler = () => {
    // console.log('Was clicked ');
    //DON'T DO THIS:  personsState.person[0].name = 'Maximilian';
    setPersonsState({
      person: [
        { name: 'Maximilian', age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '27' },
      ],

      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is realy working!</p>
      <button onClick={swithNameHandler}>Switch name</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age} />
      <Person name={personsState.person[1].name} age={personsState.person[1].age} >My hobies recing</Person>
      <Person name={personsState.person[2].name} age={personsState.person[2].age} />
    </div>
  );
  // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!' ));
}

export default App;