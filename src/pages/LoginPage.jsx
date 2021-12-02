import React from "react";
import "./loginPage.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { LockOutlined } from "@mui/icons-material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Background from "../background";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import auth from "../services/auth";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useNavigate();

  const handleOnClick= async(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/signin",{
      username: username,
      password: password}
  ).then((response)=>{
      if(response.data.token){
        auth.login(response.data.token);
        console.log("done");
        history('/');
      }else
      console.log(response.data.token)
  })
  }

  const paperStyle = {
    padding: 20,
    height: "350px",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Background
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2 style={{ color: "Black" }}>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleOnClick}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">   </Link>
        </Typography>
        <Typography style={{paddingTop: "5px"}}>
          {" "}
          Do you have an account ?<Link href="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
