import React from "react";

export default function TodoForm(props) {
    const {changeEventHandler, clickEventHandler} = props;
  return (
    <>
      <input type="text" placeholder='todo' onChange={changeEventHandler} />
      <button onClick={clickEventHandler}>Add Todo</button>
      <button>Clear Completed</button>
    </>
  );
}
