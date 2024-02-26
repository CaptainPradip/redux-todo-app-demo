
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actiontype";

const initialState = {
    todos: []
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.todo
                        .id,
                        text: action.todo
                        .name,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
};
export default todoReducer;