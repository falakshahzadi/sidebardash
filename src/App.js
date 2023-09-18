import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Maindash from "./Components/Dashboard/Maindash";
import Topbar from "./Components/Topbar";
import { DarkTheme, lightTheme } from "./theme";
import GroupCalendar from "./Components/Pages/Calendar";

function App() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === "dark" ? DarkTheme : lightTheme;

  useEffect(() => {
    document.body.style.backgroundColor =
      theme.palette.mode === "light"
        ? lightTheme.palette.background.default
        : DarkTheme.palette.background.default;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme.palette.mode]);

  return (
    <>
      <Box mx={1} my={1}>
        <ThemeProvider theme={theme}>
          <Sidebar>
            <Topbar />
            <Routes>
              <Route path="/" element={<Maindash />} />
              <Route path="/settings/Calendar" element={<GroupCalendar />} />
              <Route path="*" element={<> not found</>} />
            </Routes>
          </Sidebar>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default App;
