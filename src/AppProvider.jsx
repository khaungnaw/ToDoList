
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {React, createContext, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext } from "react";

const AppContext = createContext();

export default function AppProvider({children}) {
    const [mode, setMode] = useState('dark');

    const theme = createTheme({
    palette: {
        mode: mode,
    },
    });

    return (
        <AppContext.Provider value={{mode, setMode}}>
            <ThemeProvider theme={theme}>
                {children}
                <CssBaseline/>
            </ThemeProvider>
        </AppContext.Provider>
    );
}


// 3. Create the custom hook for convenience
export function useApp() {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}