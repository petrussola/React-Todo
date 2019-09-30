import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Search from "./components/TodoComponents/Search";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      formTodo: "",
      searchTerm: "",
    };
  }

  changeEventHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clickEventHandler = (event) => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        formTodo: "",
        todos: currentState.todos.concat({
          task: currentState.formTodo,
          completed: false,
          id: Date.now()
        })
      };
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  };

  
  enterDownHandler = event => {
    if (event.keyCode === 13) {
      this.clickEventHandler(event)
    }
  }


  taskOnClick = id => {
    const todoArray = this.state.todos.slice();
    const todoNewArray = todoArray.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ todoArray });
  };


  removeTodos = () => {
    const todosToBeKept = this.state.todos.filter( item => {
      return (item.completed === false)
    })
    this.setState({
      todos: todosToBeKept,
    })
  }

  eventSearchHandler = event => {
   this.setState({
    searchTerm: event.target.value,
   })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          changeEventHandler={this.changeEventHandler}
          clickEventHandler={this.clickEventHandler}
          value={this.state.formTodo}
          removeTodos={this.removeTodos}
          enterDownHandler={this.enterDownHandler}
        />
        <Search eventSearchHandler={this.eventSearchHandler} />
        <TodoList 
        todos={this.state.todos.filter( item => {
          return item.task.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })} 
        taskOnClick={this.taskOnClick} 
        />
      </div>
    );
  }
}

export default App;
