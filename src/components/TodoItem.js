import React from "react"

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>
// }

class TodoItem extends React.PureComponent{
  render(){
    return(
      <li>{this.props.todo.title}</li>
    )
  }
}

export default TodoItem