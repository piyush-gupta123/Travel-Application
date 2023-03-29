import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../ApiHelpers.js/helper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const DiaryUpdate = () => {
  const [posts, setPosts] = useState();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
    location: "",
  });
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getItem(id)
      .then((data) => {
        setPosts(data.post)
        setInputs({
            title: data.post.title,
            description: data.post.description,
            imageURL: data.post.imageURL,
            location: data.post.location,
        })
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

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
      {posts && <form onSubmit={handleSubmit}>
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
            onChange={handleChange}
            value={inputs.title}
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField
            variant="standard"
            margin="normal"
            name="description"
            onChange={handleChange}
            value={inputs.description}
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
          <TextField
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField
            name="location"
            onChange={handleChange}
            value={inputs.location}
            variant="standard"
            margin="normal"
          />

          <Button
            color="warning"
            sx={{ width: "40%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
            type="submit"
          >
            UPDATE
          </Button>
        </Box>
      </form>}
    </Box>
  );
};

export default DiaryUpdate;
