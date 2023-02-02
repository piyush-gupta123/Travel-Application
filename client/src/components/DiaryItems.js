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

const DiaryItems = ({ title, description, imageURL, location, date, id }) => {
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
      <img height="200" src=".\trekking_in_kathmandu.webp" alt={title} />
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
      <CardActions sx={{ marginLeft: "auto" }}>
        <IconButton color="warning">
          <EditIcon />
        </IconButton>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DiaryItems;
