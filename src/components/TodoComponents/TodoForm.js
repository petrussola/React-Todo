import React from "react";

export default function TodoForm({ 
  changeEventHandler, 
  clickEventHandler, 
  value, 
  removeTodos,
  enterDownHandler
 }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        name='formTodo'
        placeholder="todo"
        onChange={changeEventHandler}
        onKeyDown={enterDownHandler}
      />
      <button onClick={clickEventHandler}>Add Todo</button>
      <button onClick={removeTodos}>Clear Completed</button>
    </div>
  );
}
