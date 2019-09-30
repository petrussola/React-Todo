// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

export default function TodoList(props){ 
    const { todos } = props;   
    return (
        <div>
            {
                todos.map( todo => {
                    return (<Todo todo={todo} />)
                })
            }    
        </div>
    )
}