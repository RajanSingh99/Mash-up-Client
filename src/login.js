import React from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { AccountBox } from "@mui/icons-material";
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



const Login = () => {
    let history= useNavigate();
    const handleOnClickLogin=()=>{
        history('/login')
    }
    const handleOnClickSignup=()=>{
        history('/signup')
    }


    return (  
        <div className="login">
            <AccountCircleIcon sx={{ color:"black"},{fontSize:100}} className="login-icon" />
            {/* <Input
            className="login-form"
            id="input-with-icon-adornment"
            placeholder="Username"
            startAdornment={
                <InputAdornment position="start">
                <AccountBox sx={{ color:"black"}}/>
                </InputAdornment>
            }
            />

            <Input
            className="login-form"
            id="input-with-icon-adornment"
            type="Password"
            placeholder="Password"
            startAdornment={
                <InputAdornment position="start">
                <PasswordIcon sx={{ color:"black"}}/>
                </InputAdornment>
            }
            /> */}

             <Button className="login-button" variant="outlined" sx={{ color:"black"}} onClick={handleOnClickLogin}>Login</Button>
            <h4>or</h4>
            <Button className="login-button" variant="outlined" sx={{ color:"black"}}onClick={handleOnClickSignup} >Create an Account</Button>


        </div>
    );
}
 
export default Login;