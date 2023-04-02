import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../ApiHelpers.js/helper";
import DiaryItems from "./DiaryItems";
import { useNavigate } from "react-router-dom";
import {useSelector } from "react-redux"

const Diaries = () => {
  const [posts, setPosts] = useState();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  const navigate = useNavigate()
  const refresh = ()=>{
    if(isLoggedIn){
      navigate(0)
    }
    else{
      navigate('/auth')
    }
  }
  useEffect(() => {
    getAllUsers()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err));
  },[refresh]);
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
            user={item.user}
            key={index}
          />
        ))}
    </Box>
  );
};

export default Diaries;
