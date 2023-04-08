import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const TodoAppBar = () => {

    return(

        <AppBar position="static" style={{ backgroundColor: "pink" }} elevation={0} >
            <Toolbar>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align="center">
                    Todo List App
                </Typography>
                <Button color="inherit">Log In</Button>
            </Toolbar>
        </AppBar>

    )
}


export default TodoAppBar;