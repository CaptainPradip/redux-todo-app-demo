
import React from 'react';
import '../index.css';
import {connect} from 'react-redux';
import { addTodo } from '../redux/todo/actions';
import { useState } from 'react';


function AddTodo({addTodo}) {
    const [todo, setTodo] = useState('');
    const handleAddTodo =  (e) => {
        if (todo) {
            addTodo({
                id: Math.floor(Math.random() * 1000),
                name: todo,
                complete: false
            });
            setTodo('');
        }
    }
    return (
        <>
        <div className="flex items-center mb-12">
            <input className="flex-grow h-8 bg-transparent focus:outline-none font-medium" type="text" value={todo} placeholder="add a new task" onChange={(e)=> setTodo(e.target.value)}/>
            <button className="ml-4 text-indigo-500" type='button'
            onClick={(e)=>handleAddTodo(e)}
            >
                <svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </div>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    };
}
export default connect(null, mapDispatchToProps)(AddTodo);
