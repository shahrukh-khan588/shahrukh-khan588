import React, { useState } from "react";
import { IconButton, AppBar, Typography, Stack, Box } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../../firebase";
import Logo from '../../assets/logo.png'

const routes = [
  {
    Key: "Mountains",
    link: "/mountains",
  },
  {
    Key: "ThingsToDo",
    link: "/thingstodo",
  },
  {
    Key: "Evenets",
    link: "/events",
  },
  {
    Key: "Services",
    link: "/services",
  },
];
function Header() {
  const classes = useStyles();

  const user = useAuthUser("user", auth);

  const handelSognout = async () => {
    console.log(user, "userbf");
    try {
      await auth.signOut().then(console.log(user, "useraf"));
    } catch (e) {
      alert(e.error);
    }
  };
  return (
    <div>
      <AppBar  className={classes.header}>
        <Box className={classes.Header}>
          <Box display="flex" alignItems="center" p={'.5rem'}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </Box>

          <Stack className={classes.LinkStack}>
            {routes.map((item, i) => (
              <Link
                index={i}
                to={item.link}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                {item.Key}
              </Link>
            ))}
            {!!user.data && (
              <IconButton onClick={handelSognout} sx={{color:"#fff"}}>
                <LogoutIcon />
              </IconButton>
            )}
          </Stack>
        </Box>
      </AppBar>
    </div>
  );
}

export default Header;
