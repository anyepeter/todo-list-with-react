import React from "react";

const TodoItem = (props) => {
    return(
        <li><input type="checkbox" 
        checked={props.todo.completed}
        onChange={ () => props.event(props.todo.id)}
         />{props.todo.title} 
         <button  type="button" onClick={() => props.delete(props.todo.id)}>Delete</button></li>
    )
}

export default TodoItem;