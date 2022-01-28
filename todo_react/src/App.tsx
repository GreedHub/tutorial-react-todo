import React from 'react';
import Todo from './components/todo-list';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="TODO"/>
      <Todo/>
    </div>
  );
}

export default App;
