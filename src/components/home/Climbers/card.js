import React, { useEffect } from "react"
import { Paper, Box, Avatar, Button } from "@mui/material"
import AvImage from "../../../assets/images/sikardu.jpg"
import { Typography } from "@mui/material"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined"
import InstagramIcon from "@mui/icons-material/Instagram"
import useStyles from "./styles"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Variants() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    AOS.refresh()
  }, [])
  const classes = useStyles()
  return (
    <Box data-aos="fade-up">
      <Paper
        variant="outlined"
        sx={{
          borderRadius: "10px",
          border: "1px solid grey",
          background: "rgb(255,255,255)",
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <div className={classes.av_warper}>
          <Box className={classes.avatar}>
            <Avatar src={AvImage} sx={{ width: "80px", height: "80px" }} />
          </Box>
        </div>
        <Box sx={{ textAlign: "center", marginTop: "45px" }}>
          <Typography variant="h6" gutterBottom component="p">
            Guider Name
          </Typography>
        </Box>

        <Box
          className={classes.links}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Box
            width="60%"
            margin="0px auto"
            background="red"
            padding="10px 0px"
            display="flex"
            justifyContent="space-between"
          >
            <FacebookOutlinedIcon />
            <WhatsappOutlinedIcon />
            <InstagramIcon />
            <Button href="#text-buttons" size="small">
              Link
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
