import React, { Component } from 'react';
import ToDoList from './components/ToDoList';

const todos = [
  { display: 'Shopping', id: 0, isComplete: false },
  { display: 'Going out with friends', id: 1, isComplete: false },
  { display: 'Eating', id: 2, isComplete: true },
  { display: 'Sleeping', id: 3, isComplete: true },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList owner="Lauren" todos={todos} />
        <ToDoList
          owner="Daniel"
          todos={[{ display: 'Sleep', id: 0, isComplete: false }]}
        />
      </div>
    );
  }
}

export default App;
