// Header.jsx
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";

import {
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useState } from "react";

import {useApp} from "./AppProvider.jsx";

export default function Header({count}){
    // const [mode, setMode] = useApp();
     // This works because the component is a child of AppProvider
  const { mode, setMode } = useApp(); // OK

    // const [mode, setMode]  = useState("dark");
    return <AppBar position="static">
                <Toolbar>
                    <Typography>
                        To Do List <Badge color="secondary" badgeContent={4}>{count}</Badge>
                    </Typography>
                      {mode == "dark" ? (
                    <IconButton
                        color="inherit"
                        onClick={() => setMode("light")}>
                        <LightModeIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        color="inherit"
                        onClick={() => setMode("dark")}>
                        <DarkModeIcon />
                    </IconButton>
                )}
                </Toolbar>

            </AppBar>
}