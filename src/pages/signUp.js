import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from "react";



const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0, color:"black" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [userName,setUserName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState() ;

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
                    
                    <TextField fullWidth label='Password' placeholder="Enter your password" value={password} onChange={(event) => {
                        setPassword(event.target.value);}} required/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"value={confirmPassword} onChange={(event) => {
                        setConfirmPassword(event.target.value);}}required/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                        required="required"
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;