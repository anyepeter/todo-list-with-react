/*eslint-disable*/
import React from 'react';

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>
// }

class TodoItem extends React.PureComponent {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChang(this.props.todo.id)}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
