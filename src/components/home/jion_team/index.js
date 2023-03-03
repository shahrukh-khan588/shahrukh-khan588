// import React, { useEffect } from "react";
// import {
//   Paper,
//   Box,
//   Typography,
//   Grid,
//   ImageListItemBar,
//   Button,
// } from "@mui/material";
// import Discount from "./discountWithUs";
// import useStyles from "./styles";
// import Event from "./Events";
// import AOS from "aos";
// import "aos/dist/aos.css";
// function Index() {
//   const classes = useStyles();
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <div>
//       <Box width="90%" margin="20px auto" textAlign="center">
//         <Box margin="50px 0px ">
//           <Typography variant="h5">
//             Join Groups Ready To Explore GilGit Baltistan{" "}
//           </Typography>
//         </Box>
//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <Grid item xs={6}>
//             <Paper>
//               <Box padding="20px">
//                 <Event to="hunza" with="travllers" />
//                 <Event to="sikardu" with="chal sajna" />
//                 <Event to="hunza" with="shahrukh" />
//                 <Event to="chilas fary medows" with="travllers" />
//               </Box>
//             </Paper>
//           </Grid>
//           <Grid item xs={4}>
//             <Discount />
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }

// export default Index;
