import React from "react";
import {List} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import { ListItemIcon,ListItemText, ListItemButton} from "@mui/material";
import {Checkbox} from "@mui/material";
import IconButton from '@mui/material/IconButton'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { pink } from '@mui/material/colors';

const TodoItem = (probs) => {

    const style = probs.item.isFinished ? {textDecoration: 'line-through'} : {};

    return(
        <div className="todo-item">
            <List sx={{ width: '100%', flexGrow: 1, display: 'flex' }}>
                <ListItemButton role={undefined} onClick={() => probs.completeTodo(probs.item)} dense sx={{ width: 400, flexGrow: 1 }}>
                    <ListItemIcon >
                        <Checkbox 
                            edge="start"
                            checked={probs.item.isFinished}
                            disableRipple
                            sx={{ color: pink[500]}}
                        >
                        </Checkbox>
                    </ListItemIcon>
                    <ListItemText style={style} primary={probs.item.item} />
                </ListItemButton>

                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={() => probs.setUpdateItem({
                        
                        // Edit버튼 누르면 item제목이 inputbox에 출력되도록 세팅
                        id: probs.item.id,
                        item: probs.item.item,
                        isFinished: probs.item.isFinished
                    })}>
                        <BorderColorRoundedIcon sx={{ color: pink[500] }} />
                    </IconButton>
                } sx={{ width: 50, flexGrow: 1 }}> 
                </ListItem>

                <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="comments" onClick={() => probs.deleteTodo(probs.item)}>
                        <DeleteRoundedIcon sx={{ color: pink[500] }} />
                    </IconButton>
                } sx={{ width: 50, flexGrow: 1 }}> 
                </ListItem>
            </List>
        </div>
    );
}

export default TodoItem;