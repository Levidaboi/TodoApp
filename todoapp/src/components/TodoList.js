import React from 'react';
import Todo from  './Todo';
const TodoList = ({todos,setTodos,filteredTodos}) => {
    return (
    <div className = "todo-container">
        <ul className='todo-list'>
        {filteredTodos.map(todo => (<Todo todos={todos} todo={todo} key={todo.id} setTodos={setTodos} text = {todo.text} />))}
        </ul>
    </div>)
    ;
};

export default TodoList;