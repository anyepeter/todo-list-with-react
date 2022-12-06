/*eslint-disable*/
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Component files
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  // Edit todo title
  setUpdate = (updatedTitle, id) => {
    // Should update the todo title of the given id with the given text.
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }));
  };

  componentDidMount = async () => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
