import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <Box width="100%" position={"relative"} height="90vh">
      <img src="./road.jpg" alt="img.jpg" width={"100%"} height="70%" />
      <Typography
        variant="h3"
        textAlign={"center"}
        width={"100%"}
        fontFamily="'Dancing Script', cursive;"
        fontWeight={"bold"}
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          background: "B2C8DF",
        }}
      >
        {" "}
        Dare To Live The Life You've Always Wanted
      </Typography>
      <Box
        width={"100%"}
        height={"30%"}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          padding={5}
          fontFamily="Quicksand , sans-serif"
        >
          SHARE YOUR TRAVEL STORIES WITH US
        </Typography>
        <Box margin={"auto"}>
          {isLoggedIn ? (
            <Button
              variant="outlined"
              LinkComponent={Link}
              to="/add"
              sx={{ mr: 2 }}
            >
              SHARE YOUR STORIES
            </Button>
          ) : (
            <Button
              variant="outlined"
              LinkComponent={Link}
              to="/auth"
              sx={{ mr: 2 }}
            >
              SHARE YOUR STORIES
            </Button>
          )}
          <Button
            variant="contained"
            LinkComponent={Link}
            to="/diaries"
            sx={{ ml: 1 }}
          >
            VIEW DIARIES
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
