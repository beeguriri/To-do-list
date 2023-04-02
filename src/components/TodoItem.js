import React from "react";
import Button from '@mui/material/Button';

const TodoItem = (probs) => {

    const style = probs.item.isFinished ? {textDecoration: 'line-through'} : {};

    return(
        <div className="todo-item">
            <div className="item" style={style} onClick={() => probs.completeTodo(probs.item)}>
                {probs.item.item}
            </div>
            <Button variant="outlined" onClick={() => probs.deleteTodo(probs.item)}>Remove</Button>
        </div>
    );
}

export default TodoItem;