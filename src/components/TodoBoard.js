import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (probs) => {

    console.log(probs)
    return(

        <div>
            <h4>List</h4>
            {probs.todoList
                //id 내림차순 정렬 (최근에 입력된 것이 제일 위에 올수있도록!)
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