import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import useStyles from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

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
      <Paper elevation={6} className={classes.header}>
        <Box
          display="flex"
          justifyContent="space-between"
          width="90%"
          margin="auto"
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h4" class="animate__animated animate__flash">
              Mountains Are Calling
            </Typography>
          </Box>
          <Box display="flex" width="60%" justifyContent="space-between">
            <Box
              width="80%"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <ul className={classes.links}>
                <li>
                  <Link
                    to="/mountains"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Mountains
                  </Link>
                </li>

                <li>
                  <Link
                    to="/thingstodo"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Things To Do
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    services
                  </Link>
                </li>
              </ul>
            </Box>
            <Box alignItems="center" display="flex">
              <li>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  Login
                </Link>
              </li>
              <span>
                <ExitToAppIcon className={classes.icon} />
              </span>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default Header;
