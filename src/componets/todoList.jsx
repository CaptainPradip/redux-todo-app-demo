import React from 'react'
import { toggleTodo } from '../redux/todo/actions';
 import { connect } from 'react-redux';

function TodoList({toggleTodo, todos}) {
  return (
    <div>
        {todos.map(todo => (
            <div key={todo.id}>
                <input className='' type="checkbox" id={todo.id} onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
                <span className="ml-4 text-sm" style={{textDecoration : todo.completed ? 'line-through':""}}>{todo.text}</span>
            </div>
        ))}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => dispatch(toggleTodo(id))
    };
    }
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
