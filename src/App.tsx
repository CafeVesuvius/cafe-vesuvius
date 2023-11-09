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
            <AppBar position="sticky" elevation={0} className="border-bottom border-b border-neutral-200 bg-white">
                <Topbar className="container mx-auto sticky top-0 z-50 backdrop-blur-md">
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <div className="row">
                            <div className="col-5 d-flex justify-content-start">
                                <a className="leading-0 translate-y-0.5 font-display text-xl ps-2 tracking-tight text-neutral-800" href="/">
                                    Café Vesuvius
                                </a>
                            </div>

                            <div className="col-10 d-flex align-items-center">
                                <Stack direction="row" spacing={5}>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/about">Om os</a>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/menu">Menukort</a>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/reservation">Reservation</a>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/contact">Kontakt</a>
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
