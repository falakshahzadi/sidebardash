import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import engae from "../Images/engae.png"
import { useTheme } from '@emotion/react'

const Emailpart = () => {
  const theme = useTheme();
  return (
    <Box>
        <Typography py={1}>Rcent emails</Typography>
        <Card sx={{px:2,py:2,width:{xs:'95%',lg:'100%',md:'100%',sm:'95%'},boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}>
        <Stack gap='15px' >
          <Box display={'flex'} justifyContent={'space-between'} color="#6F6AF8"  sx={{
    ":hover": {
      bgcolor: theme.palette.emailbg,
      borderRadius:'15px',
      boxShadow:'0px 2px 19px 0px rgba(217, 216, 255, 0.83)',
      px:1,
      py:1,
      color: theme.palette.textdefault
    }
  }}>
            <img alt="img" src={engae} width="30px"></img>
         
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
          
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}  color="#6F6AF8" sx={{
    ":hover": {
      bgcolor: theme.palette.emailbg,
      borderRadius:'15px',
      boxShadow:'0px 2px 19px 0px rgba(217, 216, 255, 0.83)',
      px:1,
      py:1,
      color: theme.palette.textdefault
    }
  }}>
            <img alt="img" src={engae} width="30px"></img>
         
            <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
          
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} color="#6F6AF8" sx={{':hover':{
              bgcolor: theme.palette.emailbg,
              borderRadius:'15px',
              boxShadow:'0px 2px 19px 0px rgba(217, 216, 255, 0.83)',
              px:1,
              py:1,
              color: theme.palette.textdefault
          }}}>
            <img alt="img" src={engae} width="30px"></img>
         
            <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
          
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} color="#6F6AF8" sx={{
            ':hover':{
              bgcolor: theme.palette.emailbg,
              borderRadius:'15px',
              boxShadow:'0px 2px 19px 0px rgba(217, 216, 255, 0.83)',
              px:1,
              py:1,
              color: theme.palette.textdefault
            }
          }}>
            <img alt="img" src={engae} width="30px"></img>
         
            <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
          
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} color="#6F6AF8" sx={{':hover': {
              bgcolor: theme.palette.emailbg,
              borderRadius:'15px',
              boxShadow:'0px 2px 19px 0px rgba(217, 216, 255, 0.83)',
              px:1,
              py:1,
              color: theme.palette.textdefault
          }}}>
            <img alt="img" src={engae} width="30px"></img>
         
            <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
                <Typography fontSize={{xs:'12px',lg:'14px'}}>mahir foyshal</Typography>
          
          </Box>
        </Stack>
        </Card>
      
    </Box>
  )
}

export default Emailpart
