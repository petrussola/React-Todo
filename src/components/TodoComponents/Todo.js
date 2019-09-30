import React from 'react';

export default function TodoForm({todo, taskOnClick}) {
    return (
        <div 
        style={todo.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => taskOnClick(todo.id)}>
            {todo.task}
        </div>
    )
}