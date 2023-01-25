import React from "react";
import TodoItem from "./TodoItems";

const TodosList = (props) => {

   
        return(
            <ul>
                {
                    props.todos.map(element => {
                        return (
                        <TodoItem key={element.id} todo={element} /> )
                    })
                }
            </ul>
        )
    }
 export default TodosList;