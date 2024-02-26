
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actiontype';

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo: todo
    };
}
const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    };
}
const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
}
export { addTodo, removeTodo, toggleTodo };