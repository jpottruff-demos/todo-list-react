import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.complete ?
                'line-through' : 'none'
        }
    }



    render() {
        const {id, title } = this.props.todo;
        return (
            // NOTE: double vs. single curly brackets (inline vs. variable)
            // <div style={{backgroundColor: "blue"}}>
            // <div style={itemStyle}>
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind
                            //   (this, this.props.todo.id) } /> 
                              (this, id) } />
                    {' '}
                    {/* {this.props.todo.title} */}
                    {title}
                    <button style={btnStyle}
                            onClick={this.props.delTodo.bind(this, id)}
                            >X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

// Style Variables (example)
const btnStyle = {
    background: '#FF0000',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
