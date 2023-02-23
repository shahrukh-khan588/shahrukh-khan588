import React from "react";
import { Paper, AppBar, Typography, Stack, Box } from "@mui/material";
import useStyles from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

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
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar elevation={6} className={classes.header}>
        <Box className={classes.Header}>
          <Box display="flex" alignItems="center">
            <Typography variant="h4" class="animate__animated animate__flash">
              Mountains Are Calling
            </Typography>
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
          </Stack>
        </Box>
      </AppBar>
    </div>
  );
}

export default Header;
