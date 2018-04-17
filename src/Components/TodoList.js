import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        };
    };
    
    handleSubmitTodo = () => {
        // const {todos} =this.state;
        const todos = this.state.todos;
        todos.push(this.state.newTodo);
        this.setState({ todos, newTodo:''});
    }
 
    handleAddTodo = e => {
        this.setState({[e.target.name] : e.target.value});
    }


    render() {
        return(
            <div>
                {this.state.todos.map((todo,index)=><Todo key={todo + index} todo={todo}/>)}
                
                <form onSubmit ={this.handleAddTodo}>
                    <input
                        type="text"
                         name="newTodo"
                        value={this.state.newTodo}
                       placeholder="add todo"
                        onChange={this.handleAddTodo}
                    />
                </form>
                
                <button onClick={this.handleSubmitTodo}>Add Todo</button>
            </div>    
        );
    };
};

export default TodoList;