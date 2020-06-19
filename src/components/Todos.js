import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

    render() {
        // Can access this via this.props (or in React Dev tools)
        // console.log(this.props.todos, '<=====');
        
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} 
                      todo={todo} 
                      markComplete={this.props.markComplete} 
                      delTodo={this.props.delTodo}/>
        ));
        
    }
}

// PropTypes 
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos;
