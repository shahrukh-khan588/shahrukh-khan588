import React, { useEffect } from "react";
import { Paper, Box, Avatar,useTheme, Button } from "@mui/material";
import AvImage from "../../../assets/images/sikardu.jpg";
import { Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import useStyles from "./styles";
import { motion } from "framer-motion";
import AOS from "aos";
import Discount from "../../../assets/mountains/discount.jpg";
import "aos/dist/aos.css";
import { themeShadows} from '../../../theme/shadows'

export default function Variants() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  const theme=useTheme()
  const classes = useStyles();
  return (
    <Box data-aos="fade-up">
      <Paper
        variant="outlined"
        sx={{
          boxShadow:themeShadows().primary,
          borderRadius: "10px",
          border: "1px solid grey",
          backgroundImage: `url(${Discount})`,
        }}
      >
        <div
          className={classes.av_warper}
          style={{ backgroundImage: `url(${Discount})` }}
        >
          <Box className={classes.avatar}>
            <Avatar src={'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'} sx={{ width: "80px", height: "80px" }} />
          </Box>
        </div>
        <Box sx={{ textAlign: "center", marginTop: "45px" }}>
          <Typography variant="subtitle1" gutterBottom component="p" color={'primary'}>
            Guider Name
          </Typography>
        </Box>

        <Box
          className={classes.links}
        >
          <Box
            width="90%"
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
  );
}
