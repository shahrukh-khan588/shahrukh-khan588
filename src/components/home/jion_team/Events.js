import React, { useEffect } from "react"
import { Box, Typography, Button, Paper } from "@mui/material"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"
import img from "../../../assets/images/hunza.jpg"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import useStyles from "./styles"

export default function Events(props) {
  const classes = useStyles()
  useEffect(() => {
    console.log(props)
    AOS.init({
      duration: 2000,
    })
    AOS.refresh()
  }, [])
  return (
    <div>
      <Box width="100%" margin={"20px 0px"} justifyContent="space-between">
        <Paper
          elevation={0}
          variant="outlined"
          sx={{ padding: "10px" }}
          component={motion.div}
        >
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="space-between">
              <img src={img} alt="img" className={classes.squreimg} />
              <Box margin="0px 16px" textAlign="left">
                <Typography variant="h6">{props.with}</Typography>{" "}
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop="25px"
                >
                  <Box display="flex">
                    <LocationOnOutlinedIcon
                      fontSize="small"
                      sx={{ margin: "0px 3px 0px 0px" }}
                    />
                    <Typography variant="caption"> {props.to}</Typography>
                  </Box>
                  <Box display="flex" margin="0px 12px">
                    <CalendarTodayIcon
                      sx={{ margin: "0px 3px 0px 0px", fontSize: 16 }}
                    />
                    <Typography variant="caption">Date: 10-Jan-22</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box alignSelf="center" height="103px" component={motion.div}>
              <AvatarGroup max={4}>
                <Avatar
                  alt="Remy Sharp"
                  src={img}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={img}
                  sx={{ width: 28, height: 28 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src={img}
                  sx={{ width: 32, height: 32 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src={img}
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </AvatarGroup>
              <Button
                variant="outlined"
                sx={{ margin: "16px 0px 0px 0px", borderRadius: "24px" }}
                size="small"
              >
                join
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  )
}
