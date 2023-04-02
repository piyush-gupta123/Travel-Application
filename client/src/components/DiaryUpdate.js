import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, updatePost } from "../ApiHelpers.js/helper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const DiaryUpdate = () => {
  const [posts, setPosts] = useState();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
  });
  const navigate = useNavigate()
  const id = useParams().id;
  useEffect(() => {
    getItem(id)
      .then((data) => {
        setPosts(data.currPost);
        // console.log(data.currPost);
        setInputs({
          title: data.currPost.title,
          description: data.currPost.description,
          image: data.currPost.image,
          location: data.currPost.location,
        });
      })
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    updatePost(id,inputs)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))

    navigate('/diaries')
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
      {posts && (
        <form onSubmit={handleSubmit}>
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
              value={inputs.image}
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
        </form>
      )}
    </Box>
  );
};

export default DiaryUpdate;
