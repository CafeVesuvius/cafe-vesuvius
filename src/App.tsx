import * as React from 'react';
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Stack, styled} from "@mui/material";

const Topbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-center',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 90,
    },
  }));

function App() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" color="primary">
                    <Topbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            <div className="row">
                                <div className="col-3 d-flex justify-content-end">
                                    <a className="text-decoration-none text-dark fw-bold me-4" href="/">
                                        Café Vesuvius
                                    </a>
                                </div>
                                
                                <div className="col-9 d-flex align-items-center">
                                    <Stack direction="row" spacing={5}>
                                        <a className="nav__item text-decoration-none text-dark h6" href="/about">Om os</a>
                                        <a className="nav__item text-decoration-none text-dark h6" href="/home">Menukort</a>
                                        <a className="nav__item text-decoration-none text-dark h6" href="/reservation">Reservation</a>
                                        <a className="nav__item text-decoration-none text-dark h6" href="/contact">Kontakt</a>
                                    </Stack>
                                </div>
                            </div>
                        </Typography>
                    </Topbar>
                </AppBar>
            </Box>
        </>
    )
}

export default App
