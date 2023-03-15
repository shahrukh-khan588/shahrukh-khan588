import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, Box } from "@mui/material/";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {
  Typography,
  Paper,
  ListItem,
  useTheme,
  Stack,
  Chip,
} from "@mui/material/";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import { INTRESTIN } from "../../store/constants";
import useStyles from "./styles";
import hunza from "../../assets/hunza.mp4";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ calculatedBudget, setDistrict }) {
  const theme = useTheme();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={classes.mainCard}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shahrukh"
        subheader={moment().calendar()}
      />
      <CardMedia
        component="video"
        // controls
        autoPlay={false}
        loop={true}
        // src="https://example.com/my-video.mp4"
        // height="400"
        sx={{ borderRadius: "12px" }}
        // component="video"
        height="300"
        src={hunza}
        // image="https://firebasestorage.googleapis.com/v0/b/travel-recommendation-sy-e9a27.appspot.com/o/images%2F78e814f4-0c9c-4520-a531-322ab8e15fe3?alt=media&token=b8f7eb58-006a-4094-a7d7-0d75f2e9b945"
        // alt="Paella dish"
      >
        <video
          src={hunza}
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%" }}
          // className={classes.Video}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          Calculated Budget For One Day
        </Typography>
        <Box display={"flex"} justifyContent="space-between">
          <Box>
            {Object.keys(calculatedBudget).map((item, i) => {
              return (
                <Typography color="#333" key={i} textTransform="capitalize">
                  {item}:
                </Typography>
              );
            })}
          </Box>
          <Box>
            {Object.values(calculatedBudget).map((item, i) => {
              return (
                <Typography color="primary" key={i}>
                  <span color="#333 !important">Rs</span>:{item}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Typography>Here You can filter More Places</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack
          direction="row"
          // spacing={1}
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          {INTRESTIN.map((item, i) => {
            return (
              <Chip label={item.label} onClick={() => {}} sx={{ m: ".2rem" }} />
            );
          })}
        </Stack>
      </Collapse>
    </Box>
  );
}
