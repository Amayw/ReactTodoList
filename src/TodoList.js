import React, { Component } from 'react';
import store from './store';
import {changeInputAction,addTodoAction,deleteTodoAction} from './store/actionCreators';
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState();
    }

    componentDidMount(){
        store.subscribe(this.storeChange)
    }

    changeInputValue=(e)=>{
        const action=changeInputAction(e);
        store.dispatch(action);
    }

    addTodo=()=>{
        const action=addTodoAction();
        store.dispatch(action);
    }

    deleteTodo=(index)=>{
        const action=deleteTodoAction(index);
        store.dispatch(action);
    }

    storeChange=()=>{
        this.setState(store.getState());
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addTodo={this.addTodo}
                list={this.state.list}
                deleteTodo={this.deleteTodo}
            />
         )
    }
}

export default TodoList;
