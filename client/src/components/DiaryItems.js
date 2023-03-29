import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const DiaryItems = ({
  title,
  description,
  imageURL,
  location,
  date,
  id,
  user,
}) => {
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };
  return (
    <Card
      sx={{
        width: "40%",
        height: "60vh",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon />}
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      <img height="200" src={imageURL} alt={title} />
      <CardContent>
        <Typography variant="h5" color={"text.secondary"} padding={1}>
          {title}
        </Typography>
        <hr />
        <Box display={"flex"}>
          <Typography
            fontSize={"85%"}
            width="170px"
            padding={1}
            fontWeight="bold"
            variant="caption"
          >
            Piyush Gupta:
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingTop={1}>
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton color="warning" LinkComponent ={Link} to={`/posts/${id}`}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" LinkComponent={Link} to={`/posts/delete/${id}`}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default DiaryItems;
