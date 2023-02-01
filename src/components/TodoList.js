import React from "react";
import TodoItem from "./TodoItems";

const TodosList = (props) => {

   
        return(
            <ul>
                {
                    props.todos.map(element => {
                        return (
                        <TodoItem delete={props.delete} event={props.event} key={element.id} todo={element} /> )
                    })
                }
            </ul>
        )
    }
 export default TodosList;