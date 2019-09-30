import React from "react";

export default function TodoForm(props) {
  const { changeEventHandler, clickEventHandler, value } = props;
  return (
    <div>
      <input type="text" value={value} placeholder="todo" onChange={changeEventHandler} />
      <button onClick={clickEventHandler}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
}
