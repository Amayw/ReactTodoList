import {CHANGE_INPUT,ADD_TODO,DELETE_TODO} from './actionTypes'

export const changeInputAction=(e)=>{
    return {
        type:CHANGE_INPUT,
        value:e.target.value
    }
}

export const addTodoAction=()=>{
    return {
        type:ADD_TODO
    }
}

export const deleteTodoAction=(index)=>{
    return {
        type:DELETE_TODO,
        index
    }
}
