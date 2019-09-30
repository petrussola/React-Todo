import React from 'react';

export default function TodoForm({todo, taskOnClick}) {
    return (
        <div onClick={event => taskOnClick()}>
            {todo.task}
        </div>
    )
}