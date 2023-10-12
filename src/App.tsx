import './App.css'
import MenuBar from "./components/MenuBar.tsx";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" color="primary" className="ps-5 pe-5">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <b>Café Vesuvius</b>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>


            <MenuBar />
        </>
    )
}

export default App
