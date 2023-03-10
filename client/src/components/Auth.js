import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { sendAuthRequest } from "../ApiHelpers.js/helper";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);

  const [inputs, setinputs] = useState({ name: "", email: "", password: "" });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    if (isSignUp) {
      sendAuthRequest(true, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      width={"40%"}
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          width="60%"
          margin="auto"
          display="flex"
          flexDirection={"column"}
          padding={5}
        >
          <Typography variant="h4" textAlign="center" padding={1}>
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
          {isSignUp && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                required
                margin="normal"
              ></TextField>
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            required
            margin="normal"
          ></TextField>
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            type="password"
            value={inputs.password}
            name="password"
            required
            margin="normal"
          ></TextField>
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <Button
            onClick={() => setisSignUp(!isSignUp)}
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="outline"
          >
            Change to {isSignUp ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
