import * as React from 'react';
import './App.css'
import MenuBar from "./components/MenuBar.tsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";

function App() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <div className="row">
                                <div className="col-2 d-flex justify-content-end">
                                    <b>Café Vesuvius</b>
                                </div>
                                <div className="col-10 d-flex align-items-center">
                                    <Stack direction="row" spacing={2}>
                                        <a className="nav__item">Om os</a>
                                        <a className="nav__item">Menukort</a>
                                        <a className="nav__item">Reservation</a>
                                        <a className="nav__item">Kontakt</a>
                                    </Stack>
                                </div>
                            </div>

                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>


            <MenuBar />
        </>
    )
}

export default App
