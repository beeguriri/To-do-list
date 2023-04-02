import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (probs) => {

    //console.log(todoList)
    return(

        <div>
            <h3>Todo List</h3>
            {probs.todoList.map((item)=><TodoItem item={item} />)}
        </div>

    )
}

export default TodoBoard;