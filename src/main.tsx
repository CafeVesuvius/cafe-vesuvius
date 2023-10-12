import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mui/material/styles'
import {createTheme, ThemeProvider} from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css'

const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fcfcfc',
        },
    },
});

ReactDOM.createRoot(document.getElementById('content')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
