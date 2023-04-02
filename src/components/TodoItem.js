import React from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const TodoItem = (probs) => {

    const style = probs.item.isFinished ? {textDecoration: 'line-through'} : {};

    return(

        <div className="todo-item" style={style} onClick={() => probs.completeTodo(probs.item)}>
            {probs.item.item}
        </div>

    );
}

export default TodoItem;