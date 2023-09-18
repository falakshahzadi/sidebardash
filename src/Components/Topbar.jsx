import { Box, IconButton, Switch, useTheme} from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./globaltheme/themeSilce";


const Topbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
      };
    
    

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box 
        display="flex" 
        borderRadius = "3px"
        sx={{backgroundColor: theme.palette.cardbg}}
      >
        <InputBase sx={{ml:2, flex:1}} placeholder="Search"/>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
      <Switch    onClick={handleToggleTheme}/>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
      </Box>
      
    </Box>
  )
}

export default Topbar



