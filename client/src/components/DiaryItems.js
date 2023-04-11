import {
  Alert,
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deletePost } from "../ApiHelpers.js/helper";

const DiaryItems = ({
  title,
  description,
  image,
  location,
  date,
  id,
  user,
  name
}) => {
  const [open, setOpen] = useState(false);
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const handleDelete = ()=>{
    deletePost(id)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    setOpen(true)
    window.location.reload()
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
            {name.charAt(0)}
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
      <img height="200" src={image} alt={title} />
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
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingTop={1}>
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton color="warning" LinkComponent={Link} to={`/posts/${id}`}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
        <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: "100%" }}>
          Post Deleted Successfully
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default DiaryItems;
