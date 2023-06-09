import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { GoogleAuthProvider, getAuth, onAuthStateChanged, } from "firebase/auth";
import { signInWithRedirect, signOut, } from "firebase/auth";

const TodoAppBar = (probs) => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(probs.app);

    //로그인 관리
    onAuthStateChanged(auth, (user) => {
        if (user) {
        probs.setCurrentUser(user.uid);
        } else {
            probs.setCurrentUser(null);
        }
    });

    const loginButton = (
        <Button color="inherit" onClick={() => {
              signInWithRedirect(auth, provider);
        }}>Login</Button>
    );
    
    const logoutButton = (
        <Button color="inherit" onClick={() => {
              signOut(auth);
        }}>Log out</Button>
    );
    
    const button = probs.currentUser === null ? loginButton : logoutButton;
        
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