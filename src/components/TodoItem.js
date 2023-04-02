import React from "react";
import Button from '@mui/material/Button';

const TodoItem = (probs) => {

    const style = probs.item.isFinished ? {textDecoration: 'line-through'} : {};

    return(
        <div className="todo-item">
            <div className="item" style={style} onClick={() => probs.completeTodo(probs.item)}>
                {probs.item.item}
            </div>
            <Button variant="outlined" onClick={() => probs.setUpdateItem({
                    
                    // Edit버튼 누르면 item제목이 inputbox에 출력되도록 세팅
                    id: probs.item.id,
                    item: probs.item.item,
                    isFinished: probs.item.isFinished
            })}>Edit</Button>
            <Button variant="outlined" onClick={() => probs.deleteTodo(probs.item)}>Remove</Button>
        </div>
    );
}

export default TodoItem;