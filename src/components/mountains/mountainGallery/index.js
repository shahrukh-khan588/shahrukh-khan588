import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import All from "./All"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "../styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabRoot}>
      <Box>
        <p className={classes.mainHeading}>From Our Large Gallery</p>
        <span className={classes.back}>PHOTOS</span>
      </Box>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Adventure" {...a11yProps(1)} />
          <Tab label="Bag Pack" {...a11yProps(2)} />
          <Tab label="Day Hike" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
      <All/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
    </div>
  );
}
