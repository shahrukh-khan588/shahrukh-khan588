import React from "react"
import { Paper, Typography, Box } from "@mui/material"
import useStyles from "./styles"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Header() {
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  }
  const classes = useStyles()
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
              component={motion.div}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <ul className={classes.links}>
                <motion.li
                  whileTap={{
                    rotate: -10,
                  }}
                >
                  <Link
                    to="/mountains"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Mountains
                  </Link>
                </motion.li>

                <motion.li
                  whileTap={{
                    rotate: -10,
                  }}
                >
                  <Link
                    to="/thingstodo"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Things To Do
                  </Link>
                </motion.li>
                <motion.li
                  whileTap={{
                    rotate: -10,
                  }}
                >
                  <Link
                    to="/events"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Events
                  </Link>
                </motion.li>
                <motion.li
                  whileTap={{
                    rotate: -10,
                  }}
                >
                  Lakes
                </motion.li>
                <motion.li
                  whileTap={{
                    rotate: -10,
                  }}
                >
                  Forts
                </motion.li>
              </ul>
            </Box>
            <Box alignItems="center" display="flex">
              <motion.li
                whileTap={{
                  rotate: -10,
                }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  Login
                </Link>
              </motion.li>
              <motion.span
                whileTap={{
                  rotate: -360,
                }}
              >
                <ExitToAppIcon className={classes.icon} />
              </motion.span>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default Header
