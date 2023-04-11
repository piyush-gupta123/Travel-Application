import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { getUser } from "../ApiHelpers.js/helper";
import DiaryItems from "./DiaryItems";
import { useDispatch } from "react-redux";
import authActions from "../redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  useEffect(() => {
    getUser()
      .then((data) => setUser(data.new_user))
      .catch((err) => console.log(err));
  }, []);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {user && (
        <>
          <Typography
            textAlign={"center"}
            variant="h3"
            fontFamily={"quicksand"}
            padding={2}
          >
            User Profile
          </Typography>
          <Typography fontFamily={"quicksand"} padding={2} textAlign={"left"}>
            Name: {user.Name}
          </Typography>
          <Typography fontFamily={"quicksand"} padding={2} textAlign={"left"}>
            Email: {user.Email}
          </Typography>
          <Button
            sx={{ mr: "auto", width: "15%" }}
            color="warning"
            variant="contained"
            onClick={handleClick}
          >
            Logout
          </Button>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {user.Posts.map((post, index) => (
              <DiaryItems
                title={post.title}
                description={post.description}
                image={post.image}
                location={post.location}
                date={post.date}
                id={post.id}
                user={user._id}
                name = {user.Name}
                key={index}
              />
            ))}
          </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default Profile;
