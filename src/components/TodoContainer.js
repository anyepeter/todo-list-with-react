import React from "react";
import Header from "./Header";
import TodosList from "./TodoList";


class TodoContainer extends React.Component {
 
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
              },
              {
                id: 2,
                title: "Develop website and add content",
                completed: false
              },
              {
                id: 3,
                title: "Deploy to live server",
                completed: false
              }
        ]
    }
   handleChange = (id) => {
   this.setState(prevState => ({
   todos: prevState.todos.map(items => {
      if(items.id === id){
        return {
          ...items,
          completed: !items.completed,
        }
      }
      return items;
    })
   } )
   )
   }

   handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(element => {
          return element.id !== id;
        })
      ]
    })
   } 
    render() {
        return(
            <>
            <Header />
            <TodosList delete={this.handleDelete} event={this.handleChange} todos={this.state.todos} />
          </>
        )
    }
}

export default TodoContainer;