import { Box } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import Emailpart from "./Emailpart";
import Chartcombine from "./Chartcombine";



const Maindash = () => {
  return (
    <>
      <Box  sx={{ px: {lg:5,xs:0,sm:1,md:4}, py: 2 }}>
        <Cards/>
        <Chartcombine/>
         <Emailpart/>
      </Box>
    </>
  );
};

export default Maindash;
