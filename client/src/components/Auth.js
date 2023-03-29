import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendAuthRequest } from "../ApiHelpers.js/helper";
import authActions from "../redux/index";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  // const [errors, setErrors] = useState("");
  const [inputs, setinputs] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkTimeOut = () => {
    var hours = 1; // to clear the localStorage after 1 hour
    // (if someone want to clear after 8hrs simply change hours=8)
    var now = new Date().getTime();
    var setupTime = localStorage.getItem("setupTime");
    if (setupTime == null) {
      localStorage.setItem("setupTime", now);
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem("setupTime", now);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      if (isSignUp) {
        sendAuthRequest(true, inputs)
          .then((data) => {
            localStorage.setItem("userId", data.id);
          })
          .then(() => {
            dispatch(authActions.login());
            navigate("/");
          })
          .catch((err) => {
            // setErrors(err.response.data.Message);
            console.log(err);
          });
      } else {
        sendAuthRequest(false, inputs)
          .then((data) => localStorage.setItem("userId", data.id))
          .then(() => {
            dispatch(authActions.login());
            navigate("/");
          })
          .catch((err) => {
            // setErrors(err.response.data.Message);
            console.log(err);
          });
      }
      checkTimeOut()
    } catch (err) {
      console.log(err);
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
            type="email"
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
            sx={{ mt: 2, borderRadius: 10, border: "1px solid skyblue" }}
            variant="outline"
          >
            Change to {isSignUp ? "Login" : "Sign Up"}
          </Button>
          {/* {errors.length>0 ? <label>{errors}</label> : ""} */}
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
