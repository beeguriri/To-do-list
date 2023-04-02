import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (probs) => {

    console.log(probs)
    return(

        <div>
            <h4>List</h4>
            {probs.todoList.map((item)=>
                <TodoItem key={item.id++} item={item} 
                    completeTodo={probs.completeTodo} 
                    deleteTodo={probs.deleteTodo} />)}
        </div>

    )
}

export default TodoBoard;