import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(props) {
  super(props);
  this.state = {
    todos: [],
    formTodo: '',
  };
}

changeEventHandler = event => {
  this.setState({
    formTodo: event.target.value,
  })
}

clickEventHandler = event => {
  this.setState(currentState => (
    {todos: currentState.todos.concat(this.state.formTodo)}
  ))
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm changeEventHandler={this.changeEventHandler} clickEventHandler={this.clickEventHandler} /> 
      </div>
    );
  }
}

export default App;
