import { createTheme } from "@mui/material";



export const lightTheme = createTheme({
  palette: {
    mode: "light",
    textColor: "black",
    budgettext:"black",
    addtextColor:'black',
    btn: "#549B7D",
    appbarbg: "white",
    gridbg:'white',
    textdefault:'black',
    inputbg:"white",
    category:"white",
    cardbg:'#6F6AF8',
    emailbg:"transparent",
    calendarbg:'white'
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    textColor: "#C1C2C5",
    addtextColor:'#A5D8FF',
    btn: "#549B7D",
    appbarbg: "#25262B",
    gridbg:'#141312',
    textdefault:'white',
    inputbg:"#25262B",
    category:"black",
    budgettext:'white',
    cardbg:'#525252',
    icons:'#6F6AF8',
    emailbg:"#525252",
    calendarbg:'#525252'
  },
});