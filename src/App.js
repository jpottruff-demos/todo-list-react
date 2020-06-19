import React from 'react';
import {v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends React.Component {

  state = {
    todos: [
      {
        // id: 1,
        id: uuidv4(),
        title: 'Take out the trash',
        complete: false
      },
      {
        // id: 2,
        id: uuidv4(),
        title: 'Sweep the floor',
        complete: false
      },
      {
        // id: 3,
        id: uuidv4(),
        title: 'Feed the Cat',
        complete: false
      }
    ]
  }

  // Toggles complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo;

    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id
    )] });
  }

  addTodo = (title) => {
    console.log(title);
    
    const newTodo = {
      // id: 4,  // can use the library below (for dev - not prod)
      id: uuidv4(),
      // title: title,
      title,
      complete: false
    }
    // Make a copy 
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    // Can access it here (or in React Dev Tools without)
    // console.log(this.state.todos);

    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/> 
          {/* Passing in the todos as a property (prop)*/}
          <Todos todos={this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo}
                />
        </div>
      </div>
    );
  }

}


export default App;
