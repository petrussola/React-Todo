import React from "react";

export default function TodoForm(props) {
  const { changeEventHandler, clickEventHandler, value, removeTodos } = props;
  return (
    <div>
      <input
        type="text"
        value={value}
        name='formTodo'
        placeholder="todo"
        onChange={changeEventHandler}
      />
      <button onClick={clickEventHandler}>Add Todo</button>
      <button onClick={removeTodos}>Clear Completed</button>
    </div>
  );
}
