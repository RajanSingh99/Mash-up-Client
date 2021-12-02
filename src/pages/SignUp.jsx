import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0, color:"black" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('') ;
    const [error,setError]=useState(['']);
    let history = useNavigate();

    const handleOnClick= async(e)=>{
        e.preventDefault();
        let err=[];
        if(userName.includes(" ") || !userName || userName ===""){
            err.push('invalid Username')
        }
        if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)|| !email ||email ===""){
            err.push('invalid email')
        }
        if(!password || password ==="" || password.length<8){
            err.push('password should be atleast 8 characters')
        }

        if(err.length===0){
            setError(err);
        }else{
            console.log(error)
            setError(err);
        }
        axios.post("http://localhost:5000/signup",{
            username: userName,
            password: password,
            email: email,}
        ).then((response)=>{
            console.log(response)
            if(response.status ===200){
                history('/login')
            }
        })
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='UserName' placeholder="Enter Username" value={userName} onChange={(event) => {
                        setUserName(event.target.value);}} required />
                    <TextField fullWidth label='Email' placeholder="Enter your email" value={email} onChange={(event) => {
                        setEmail(event.target.value);}} required/>
                    
                    <TextField fullWidth type="password" label='Password' placeholder="Enter your password" value={password} onChange={(event) => {
                        setPassword(event.target.value);}} required/>
                    <TextField fullWidth type="password" label='Confirm Password' placeholder="Confirm your password"value={confirmPassword} onChange={(event) => {
                        setConfirmPassword(event.target.value);}}required/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                        required="required"
                    />
                    
                    <Button variant='contained' color='primary' onClick={handleOnClick}>Sign up</Button>
                </form>
                
                {error.map((err,i)=>(
                        <Typography style={{color:"#ff0000", fontSize: '1em'}} key={i}>{err}</Typography>
                ))}
                 <Typography >
                    {" "}
                    Already have an account?<Link href="/login"> Login</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;