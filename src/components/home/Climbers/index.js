import React, { useEffect } from "react"
import { Box, Grid, Typography } from "@mui/material"
import AOS from "aos"
import "aos/dist/aos.css"
import Card from "./card"

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    AOS.refresh()
  }, [])
  return (
    <Box minWidth="90%" margin="150px auto">
      <Box textAlign="center" data-aos="fade-up">
        <Typography
          variant="h4"
          gutterBottom
          component="p"
          sx={{ top: "-62px", position: "relative" }}
        >
          Guiders
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="p"
          sx={{ top: "-62px", position: "relative" }}
        >
          if you want to explore GilGit Balitistan. these professional guider
          can guide you to unexplored places in gilgit baltistan.
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 2, md: 3, sm: 2 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={2}>
          {" "}
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {" "}
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {" "}
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={2}>
          {" "}
          <Card />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Index
