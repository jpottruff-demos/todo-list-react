import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// For creating unique ids on the fly
// import {v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';



class App extends React.Component {

  state = {
    todos : []

    // We were using this prior to JSON Placeholder
    // todos: [
    //   {
    //     // id: 1,
    //     id: uuidv4(),
    //     title: 'Take out the trash',
    //     complete: false
    //   },
    //   {
    //     // id: 2,
    //     id: uuidv4(),
    //     title: 'Sweep the floor',
    //     complete: false
    //   },
    //   {
    //     // id: 3,
    //     id: uuidv4(),
    //     title: 'Feed the Cat',
    //     complete: false
    //   }
    // ]
  }

  // NOTE: lifecycle method
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggles complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;

    }) });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]} ));
    
      // Pre JSON Placeholder
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id
    // )] });
  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState( { todos: [...this.state.todos, res.data]} ));

    // Pre JSON Placeholder
    // const newTodo = {
    //   // id: 4,  // can use the library below (for dev - not prod)
    //   id: uuidv4(),
    //   // title: title,
    //   title,
    //   completed: false
    // }
    // Make a copy 
    // this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    // Can access it here (or in React Dev Tools without)
    // console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />

            {/* Note: this is RENDER PROPS */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/> 
                {/* Passing in the todos as a property (prop)*/}
                <Todos todos={this.state.todos} 
                      markComplete={this.markComplete} 
                      delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

}


export default App;
