import React,{useState} from 'react'
import { Paper, Box, Typography, Grid, Button,styled,useTheme } from "@mui/material"
import AddHotels from '../../components/serviceProvider/Form '
import AddGroup from '../../components/serviceProvider/AddGroup/Index'
const Services =styled(Box)({
display:"grid",
gridTemplateColumns:"2fr 10fr",
borderRadius:"8px 8px 0px 8px "

})
function Index() {
  const [active ,setActive]=useState("")
  const theme=useTheme()
  const quickLink=['Add Hotels','Add Places','Add Groups','Add Restaurants']
  return (
    <Services>
      <Box bgcolor={theme.palette.secondary.main} sx={{height:"100vh"}} minWidth="350px">
       {quickLink.map((item)=>(
         <Box key={item} p=".5rem 1rem"
          m='1rem auto' 
         sx={{ cursor:"pointer" ,'&:hover':{background:theme.palette.secondary.hover}}}
          borderRadius=".5rem"
          width="85%" 
          bgcolor={active===item?theme.palette.BG.secondary:theme.palette.secondary.light}
          onClick={()=>setActive(item)}>
            <Typography variant="body1"> {item} </Typography></Box>
       )) }
      </Box>
      <Box  bgcolor={theme.palette.BG.secondary}>
      {console.log(active)}
     { active==='Add Hotels' ? <AddHotels/>:'' }
     { active==='Add Groups' ? <AddGroup/>:'' }
      </Box>
    </Services>
  )
}

export default Index