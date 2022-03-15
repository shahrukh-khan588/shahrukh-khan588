import React from "react";
import useStyles from "./styles";
import { Paper, Typography, Box, Divider } from "@material-ui/core";
import footerimg from "../../assets/thingstodo/skies.webp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import Input from "../Ui_components/TextField";
import Button from "../Ui_components/Button"
function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root} display="flex">
        <div className={classes.img}>
          <img
            src={footerimg}
            alt={"img"}
            style={{
              maxWidth: "100%",
              height: "auto",
              boxShadow: "9px 14px 26px -13px rgba(0,0,0,0.75)",
              borderRadius: "24px 0px 0px 0px",
            }}
          ></img>
        </div>
        <Box width="100%" alignItems="center">
            <Box width="100%" margin='auto'>
                <Box width="60%"  padding="10px" margin="auto">
                <Input label={"Your Email"} style={{width:"60%"}}/>
                <Button title="SUBSCRIBE" style={{height:"63px" ,marginLeft:"12px"}}/>
                </Box>
            </Box>
          <Box
            padding="10px 30px"
            display="flex"
            flexWrap="wrap"
            width="60%"
            alignItems="center"
            margin="24px auto"
          >
            <Box>
              <Typography variant="h4" className={classes.heading}>
                Partner Ship
              </Typography>
              <ul className={classes.ul}>
                <li>Travellers.com</li>
                <li>Eagle Nest Hotel</li>
                <li> GilGit tourism Group</li>
              </ul>
            </Box>
            <Box>
              <Typography variant="h4" className={classes.heading}>
                Abut Us
              </Typography>
              <ul className={classes.ul}>
                <li>Travellers.com</li>
                <li>Eagle Nest Hotel</li>
                <li> GilGit tourism Group</li>
              </ul>
            </Box>
            <Box>
              <Typography variant="h4" className={classes.heading}>
                Support
              </Typography>
              <ul className={classes.ul}>
                <li>Travellers.com</li>
                <li>Eagle Nest Hotel</li>
                <li> GilGit tourism Group</li>
              </ul>
            </Box>
          </Box>
          <Divider variant="middle" />
          <Box display="flex" width="94%" justifyContent="right">
              <Box width="15%" justifyContent="space-between" display="flex" marginTop="30px" >
            <div>
              <FacebookOutlinedIcon style={{color:"#fff"}}/>
            </div>
            <div>
              <WhatsappOutlinedIcon style={{color:"#fff"}}/>
            </div>
            <div>
              <InstagramIcon style={{color:"#fff"}}/>
            </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
