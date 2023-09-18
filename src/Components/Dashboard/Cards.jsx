import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FoundationIcon from '@mui/icons-material/Foundation';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from "@emotion/react";







const Cards = () => {
 const theme = useTheme();

  return (
    
    <Box>
    
      <Grid container spacing='15px' justifyContent={'center'} alignItems={'center'}>
        <Grid item lg={3} xs={11} sm={5.5} md={3} >
          <Card sx={{px:2,py:5,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)",}} > 
            <Stack direction={"row"} justifyContent={'space-between'} pb="10px">
                <FoundationIcon sx={{color:'#6F6AF8'}}/>
                 <MoreVertIcon/>
            </Stack>
            <input type="number" placeholder="0" style={{border:'none',outline:'none',background:'none',color: theme.palette.textdefault}}></input>
                 <Typography  pt="10px" >Your bank balance</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} xs={11} sm={5.5} md={3} >
        <Card sx={{px:2,py:5,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}> 
            <Stack direction={"row"} justifyContent={'space-between'}  pb="10px">
                < AccountBalanceWalletIcon sx={{color:'#6F6AF8'}}/>
                 <MoreVertIcon/>
            </Stack>
            <input type="number" placeholder="0" style={{border:'none',outline:'none',background:'none',color: theme.palette.textdefault}}></input>
                 <Typography  pt="10px">Your bank balance</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} xs={11} sm={5.5} md={3} >
        <Card sx={{px:2,py:5,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}> 
            <Stack direction={"row"} justifyContent={'space-between'}  pb="10px">
                <AlarmOnIcon  sx={{color:'#6F6AF8'}}/>
                 <MoreVertIcon/>
            </Stack>
            <input type="number" placeholder="0" style={{border:'none',outline:'none',background:'none',color: theme.palette.textdefault}}></input>
                 <Typography  pt="10px">Your bank balance</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} xs={11} sm={5.5} md={3} >
        <Card sx={{px:2,py:5,borderRadius:'15px',boxShadow:"0px 2px 19px 0px rgba(217, 216, 255, 0.83)"}}> 
            <Stack direction={"row"} justifyContent={'space-between'}  pb="10px">
                <CreditScoreIcon sx={{color:'#6F6AF8'}}/>
                 <MoreVertIcon/>
            </Stack>
            <input type="number" placeholder="0" style={{border:'none',outline:'none',background:'none',color: theme.palette.textdefault}}></input>
                 <Typography  pt="10px">Your bank balance</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
