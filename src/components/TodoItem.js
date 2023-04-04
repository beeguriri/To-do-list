import React from "react";
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { pink } from '@mui/material/colors';

const TodoItem = (probs) => {

    const style = probs.item.isFinished ? {textDecoration: 'line-through'} : {};

    return(
        <div className="todo-item">
            <div className="item">
                <ul>
                    <li className="item" style={style} onClick={() => probs.completeTodo(probs.item)}>
                        {probs.item.item}
                    </li>
                </ul>
            </div>

            <div className="buttonarea">

                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={() => probs.setUpdateItem({
                        
                        // Edit버튼 누르면 item제목이 inputbox에 출력되도록 세팅
                        id: probs.item.id,
                        item: probs.item.item,
                        isFinished: probs.item.isFinished
                })}>
                        <BorderColorRoundedIcon sx={{ color: pink[500] }} />
                    </IconButton>
                }> </ListItem>
                

                {/* <Button variant="outlined" onClick={() => probs.deleteTodo(probs.item)}>Remove</Button> */}

                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={() => probs.deleteTodo(probs.item)}>
                        <DeleteRoundedIcon sx={{ color: pink[500] }} />
                    </IconButton>
                }> </ListItem>

            </div>
        </div>
    );
}

export default TodoItem;