import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getUser } from "../ApiHelpers.js/helper";
import DiaryItems from "./DiaryItems";

const Profile = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser()
      .then((data) => setUser(data.new_user))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        textAlign={"center"}
        variant="h3"
        fontFamily={"quicksand"}
        padding={2}
      >
        {" "}
        User Profile{" "}
      </Typography>
      <Typography fontFamily={"quicksand"} padding={2} textAlign={"left"}>
        Name: Piyush
      </Typography>

      <Typography fontFamily={"quicksand"} padding={2} textAlign={"left"}>
        Email: piyush@gmail.com
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {user.posts.map((post, index) => {
          <DiaryItems title={"post.title"} />;
        })}
      </Box>
    </Box>
  );
};

export default Profile;
