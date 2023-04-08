import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { signInWithRedirect, signOut, } from "firebase/auth";

const TodoAppBar = (probs) => {

    const loginWithGoogleButton = (
        <Button color="inherit" onClick={() => {
              signInWithRedirect(probs.auth, probs.provider);
        }}>Login</Button>
    );
    
    const logoutButton = (
        <Button color="inherit" onClick={() => {
              signOut(probs.auth);
        }}>Log out</Button>
    );
    
    const button = probs.currentUser === null ? loginWithGoogleButton : logoutButton;
        
    return(

        <AppBar position="static" style={{ backgroundColor: "pink" }} elevation={0} >
            <Toolbar>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align="center">
                    Todo List App
                </Typography>
                {/* <Button color="inherit">Log In</Button> */}
                {button}
            </Toolbar>
        </AppBar>

    )
}


export default TodoAppBar;