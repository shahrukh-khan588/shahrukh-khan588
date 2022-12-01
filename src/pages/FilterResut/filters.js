import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {
  Typography,
  Switch,
  FormControlLabel,
  FormGroup,
  useTheme,
} from "@mui/material/";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import useStyles from "./styles";

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

export default function RecipeReviewCard({ setDistrict }) {
  const theme = useTheme();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.mainCard}>
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
        sx={{ borderRadius: "12px" }}
        component="img"
        height="194"
        image="https://firebasestorage.googleapis.com/v0/b/travel-recommendation-sy-e9a27.appspot.com/o/images%2F78e814f4-0c9c-4520-a531-322ab8e15fe3?alt=media&token=b8f7eb58-006a-4094-a7d7-0d75f2e9b945"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This Result is filter based on Your Budget and Selected Destination.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography>Here You can filter More...</Typography>
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
        <CardContent>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Hotels" />
            <FormControlLabel
              control={<Switch onChange={() => setDistrict("places")} />}
              label="Get Visiting Places"
            />
            <FormControlLabel
              control={<Switch onChange={() => setDistrict("trips")} />}
              label="Find Groups to join"
            />
            <FormControlLabel
              control={<Switch onChange={() => setDistrict("transports")} />}
              label="Transports to your Destination"
            />
            <FormControlLabel
              control={<Switch onChange={() => setDistrict("events")} />}
              label="Transports to your Destination"
            />
          </FormGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
}
