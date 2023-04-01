import React, { useEffect } from "react";
import {Box} from "@mui/material"
import { getUser } from "../ApiHelpers.js/helper";


const Profile = () => {
  
  useEffect(()=>{
    getUser()
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <Box>

    </Box>
  );
};

export default Profile;
