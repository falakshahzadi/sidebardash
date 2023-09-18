import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FoundationIcon from '@mui/icons-material/Foundation';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React from 'react'
import { useTheme } from '@emotion/react';
import Chart from './Chart';


const Chartcombine = () => {
  const theme = useTheme();
  return (
    <Box mt="20px">
      <Grid container spacing={'15px'} justifyContent={'center'} alignItems={'center'}>
        <Grid item lg={3} xs={11} sm={11} md={3} >
          <Stack gap="20px">
          <Card sx={{px:2,py:4,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}> 
            <Stack direction={"row"} justifyContent={'space-between'}  pb="10px" >
                <AlarmOnIcon  sx={{color:'#6F6AF8'}}/>
                 <MoreVertIcon/>
            </Stack>
            <input type="number" placeholder="0" style={{border:'none',outline:'none',background:'none',color: theme.palette.textdefault}}></input>
                 <Typography  pt="10px">Your bank balance</Typography>
          </Card>
          <Card sx={{px:2,py:5,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}> 
            <Stack direction={"row"} justifyContent={'space-between'}  pb="10px">
                <AlarmOnIcon  sx={{color:'#6F6AF8'}}/>
                 <MoreVertIcon/>
            </Stack>
            <input type="number" placeholder="0" style={{border:'none',outline:'none',background:'none',color: theme.palette.textdefault}}></input>
                 <Typography  pt="10px">Your bank balance</Typography>
          </Card>
          </Stack>
        </Grid>
        <Grid item lg={9} xs={11} sm={11} md={9}>
           <Chart/>
        </Grid>
      </Grid>
  
    </Box>
  )
}

export default Chartcombine
