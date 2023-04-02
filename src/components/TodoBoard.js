import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (probs) => {

    console.log(probs)
    return(

        <div>
            <h4>List</h4>
            {probs.todoList
                .sort((a,b) => a.id > b.id ? -1 : 1)
                .map((item)=>
                    <TodoItem key={item.id} item={item} 
                        completeTodo={probs.completeTodo} 
                        deleteTodo={probs.deleteTodo}
                        setUpdateItem={probs.setUpdateItem} />)}
        </div>

    )
}

export default TodoBoard;