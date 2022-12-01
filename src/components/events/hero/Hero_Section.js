import React from "react";
import Svg from "../svg/svg";
import useStyles from "../styles";
import { Typography, Box } from "@mui/material";
// import Navroz from "../../../assets/thingstodo/";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Rating from "@mui/material/Rating";
function Hero_Section() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.event}>
        <Svg />
        <Box>
          <img
            style={{ width: "40%", borderRadius: "10px" }}
            src={
              "https://2.bp.blogspot.com/-60H1mhW85x8/VvPOwJFkzHI/AAAAAAAAAns/eS8U0s003_087J5uexIzKNaMUK4l-k7OQ/s640/11334238_882063165192767_2969380281667604204_o.jpg?w=164&h=164&fit=crop&auto=format"
            }
            alt={"navroz"}
          />
          <Box width="55%">
            <Typography variant="h4" className={classes.heading}>
              What is Navroz?
            </Typography>
            <Typography sx={{ marginTop: "25px", color: "gray" }}>
              For the Northern Hemisphere, March 20 is the first day of spring.
              But for 300 million people around the world, it’s the beginning of
              a new year, too. Nowruz—which means “new day”—is a holiday marking
              the arrival of spring and the first day of the year in Iran, whose
              solar calendar begins with the vernal equinox. Nowruz has been
              celebrated in Iran and the Persian diaspora for more than 3,000
              years. Its roots are as a feast day in Zoroastrianism, a religion
              practiced in ancient Persia that viewed the arrival of spring as a
              victory over darkness. The holiday survived the Islamic conquest
              of Persia in the seventh century and the decline of
              Zoroastrianism’s popularity, and it spread across the globe
              through the diaspora of Persian people throughout history. (Here's
              how Persia became the world's first true empire.)
            </Typography>
            <Rating
              sx={{ margin: "10px 0px" }}
              name="size-small"
              defaultValue={4.5}
              size="small"
              readOnly
              precision={0.5}
            />
            <Box display="flex" margin="16px 0px">
              <DateRangeRoundedIcon />
              <Typography sx={{ marginLeft: "16px" }}>date</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box Name={classes.main}></Box>
      <Box className={classes.event}>
        <Box width="55%">
          <Typography variant="h4" className={classes.heading}>
            What is Navroz?
          </Typography>
          <Typography sx={{ marginTop: "25px", color: "gray" }}>
            Hello my name is Shahrukh khan from Gilgit Baltistan. professionally
            i am a mountaineer. i smutted all the mountains located in gilgit
            baltistan. like K-2, rakaposhi and famous mountains in G-B. you can
            Visit mountains and know nature more closer. and it feels us god
            near around us.Hello my name is Shahrukh khan from Gilgit Baltistan.
            professionally i am a mountaineer. i smutted all the mountains
            located in gilgit baltistan. like K-2, rakaposhi and famous
            mountains in G-B. you can Visit mountains and know nature more
            closer. and it feels us god near around us.Hello my name is Shahrukh
            khan from Gilgit Baltistan. professionally i am a mountaineer. i
            smutted all the mountains located in gilgit baltistan. like K-2,
            rakaposhi and famous mountains in G-B. you can Visit mountains and
            know nature more closer. and it feels us god near around us.Hello my
            name is Shahrukh khan from Gilgit Baltistan. professionally i am a
            mountaineer.
          </Typography>
          <Rating
            sx={{ margin: "10px 0px" }}
            name="size-small"
            defaultValue={4.5}
            size="small"
            readOnly
            precision={0.5}
          />
          <Box display="flex" margin="16px 0px">
            <DateRangeRoundedIcon />
            <Typography sx={{ marginLeft: "16px" }}>date</Typography>
          </Box>
        </Box>
        <img
          style={{ width: "40%", borderRadius: "10px" }}
          src={
            "https://2.bp.blogspot.com/-60H1mhW85x8/VvPOwJFkzHI/AAAAAAAAAns/eS8U0s003_087J5uexIzKNaMUK4l-k7OQ/s640/11334238_882063165192767_2969380281667604204_o.jpg?w=164&h=164&fit=crop&auto=format"
          }
          alt={"navroz"}
        />
      </Box>
    </div>
  );
}

export default Hero_Section;
