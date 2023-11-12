import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mui/material/styles'
import {createTheme, ThemeProvider} from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fcfcfc',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
});

ReactDOM.createRoot(document.getElementById('content')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
