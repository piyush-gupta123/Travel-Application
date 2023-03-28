import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const linksArr = ["home", "diaries", "auth"];
const loggedInLinks = ["home", "diaries", "add", "profile"];
const Header = () => {
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
        <Toolbar>
          <Link to={"/"}>
            <ModeOfTravelIcon sx={{ color: "black" }} />
          </Link>

          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            sx={{ ml: "auto", textDecoration: "none" }}
          >
            {isLoggedIn
              ? loggedInLinks.map((link) => (
                  <Tab
                    LinkComponent={Link}
                    to={`/${link === "home" ? "" : link}`}
                    sx={{
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "18px",
                      },
                    }}
                    key={link}
                    label={link}
                  />
                ))
              : linksArr.map((link) => (
                  <Tab
                    LinkComponent={Link}
                    to={`/${link === "home" ? "" : link}`}
                    sx={{
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "18px",
                      },
                    }}
                    key={link}
                    label={link}
                  />
                ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
