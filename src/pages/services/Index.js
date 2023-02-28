import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  Button,
  styled,
  useTheme,
} from "@mui/material";
import AddHotels from "../../components/serviceProvider/Form ";
import AddGroup from "../../components/serviceProvider/AddGroup/Index";
import AddPlaces from "../../components/serviceProvider/AddPlaces/index";
import AddEvents from "../../components/serviceProvider/AddEvents/index";
const Services = styled(Box)({
  display: "grid",
  gridTemplateColumns: "2fr 10fr",
  borderRadius: "8px 8px 0px 8px ",
});
function Index() {
  const [active, setActive] = useState("Add Hotels");
  const theme = useTheme();
  const quickLink = ["Add Hotels", "Add Places", "Add Groups", "Add Events"];
  return (
    <Services>
      <Box
        bgcolor={theme.palette.grey[300]}
        sx={{ height: "100vh" }}
        minWidth="350px"
        pt="6rem"
      >
        {quickLink.map((item) => (
          <Box
            key={item}
            p=".5rem 1rem"
            m="1rem auto"
            sx={{
              cursor: "pointer",
              "&:hover": { background: theme.palette.primary.main },
            }}
            borderRadius=".5rem"
            width="85%"
            bgcolor={
              active === item
                ? theme.palette.background.paper
                : theme.palette.primary.main
            }
            onClick={() => setActive(item)}
          >
            <Typography variant="body1"> {item} </Typography>
          </Box>
        ))}
      </Box>
      <Box bgcolor={theme.palette.grey[200]}>
        {console.log(active)}
        {active === "Add Hotels" ? <AddHotels /> : ""}
        {active === "Add Groups" ? <AddGroup /> : ""}
        {active === "Add Places" ? <AddPlaces /> : ""}
        {active === "Add Events" ? <AddEvents /> : ""}
      </Box>
    </Services>
  );
}

export default Index;
