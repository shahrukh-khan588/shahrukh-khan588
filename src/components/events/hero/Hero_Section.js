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
      <Box>
        <Box className={classes.event}>
          <img
            style={{ width: "40%", borderRadius: "10px" }}
            src={
              "https://activetourspakistan.com/wp-content/uploads/2017/11/Shandur-Polo-Festival-Tournament.jpg"
            }
            alt={"navroz"}
          />
          <Box width="55%">
            <Typography variant="h4" className={classes.heading}>
              <Svg />
              Shandur Polo Festival
            </Typography>
            <Typography sx={{ marginTop: "25px", color: "gray" }}>
              The Shandur Polo Festival is an annual event held in July or
              August in the Shandur Pass, which is located in the Gilgit
              Baltistan region of northern Pakistan. The festival features polo
              matches between teams from Gilgit and Chitral, and it is
              considered one of the highest polo grounds in the world. In
              addition to the polo matches, the festival also includes
              traditional music, dance, and other cultural activities. The
              festival attracts a large number of visitors from around the
              country and is an important event for the local community. The
              Shandur Pass is located at an altitude of 12,000 feet and is a
              popular tourist destination due to its stunning natural beauty.
              The pass is surrounded by towering mountains and is home to a
              variety of wildlife, including ibex, snow leopards, and brown
              bears. Overall, the Shandur Polo Festival is a unique event that
              combines the thrill of polo with the rich cultural traditions of
              Gilgit Baltistan. It offers a great opportunity to experience the
              region's culture and way of life, as well as to enjoy the natural
              beauty of the area.
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
              <Typography sx={{ marginLeft: "16px" }}>
                July || August
              </Typography>
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
            Navroz, also known as Nowruz, is a holiday that is celebrated by
            people of various cultures and religions around the world. It is
            typically celebrated on the spring equinox, which is the first day
            of the year in the traditional Iranian calendar. Navroz is a time of
            renewal and celebration, and it is marked by a number of traditions
            and customs. These may include the setting up of a special table
            called a "Haft Seen," which includes items symbolizing the start of
            a new year, such as a mirror, an apple, and coins. Navroz is also a
            time for family and friends to come together and exchange gifts. In
            some cultures, people also perform traditional dances, sing songs,
            and enjoy special meals. While Navroz is most commonly associated
            with Iranian culture, it is also celebrated by people in other parts
            of the world, including Afghanistan, Tajikistan, and Gilgit
            Baltistan in northern Pakistan. In these regions, Navroz is an
            important cultural and religious holiday that is celebrated with
            great joy and enthusiasm.
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
            <Typography sx={{ marginLeft: "16px" }}>21 / March</Typography>
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
