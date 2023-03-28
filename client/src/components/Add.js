import React, { useState } from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const Add = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
    location: "",
    date: "",
  });

  const handleChange = (e)=>{
    setInputs((prevstate)=>({
      ...prevstate,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <Box display={"flex"} margin="auto" marginTop={5}>
        <Typography
          variant="h4"
          fontFamily="dancing script"
          fontWeight={"bold"}
        >
          ADD YOUR TRAVEL DIARY
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral" }}
        />
      </Box>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          padding={3}
          margin="auto"
          width="80%"
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField
            variant="standard"
            name="title"
            value={inputs.title}
            margin="normal"
            onChange={handleChange}
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
          <TextField
            name="imageurl"
            value={inputs.imageURL}
            onChange={handleChange}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField
            name="location"
            value={inputs.location}
            onChange={handleChange}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField
            type={"date"}
            name="date"
            value={inputs.date}
            onChange={handleChange}
            variant="standard"
            margin="normal"
          />
          <Button
            color="warning"
            sx={{ width: "40%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            POST
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
