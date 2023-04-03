import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../ApiHelpers.js/helper";
import DiaryItems from "./DiaryItems";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllUsers()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {""}
      {posts &&
        posts.map((item, index) => (
          <DiaryItems
            title={item.title}
            description={item.description}
            image={item.image}
            location={item.location}
            date={new Date(`${item.date}`).toLocaleDateString()}
            id={item._id}
            user={item.user._id}
            name={item.user.Name}
            key={index}
          />
        ))}
    </Box>
  );
};

export default Diaries;
