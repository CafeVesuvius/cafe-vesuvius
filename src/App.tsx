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
                        <div className="relative z-50 flex justify-between">
                            <div className="flex items-center md:gap-x-12">
                                <a className="leading-0 translate-y-0.5 font-display font-bold text-xl ps-2 tracking-tight text-neutral-800" href="/">
                                    Café Vesuvius
                                </a>
                                <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/about">Om os</a>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/menu">Menukort</a>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/reservation">Reservation</a>
                                    <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/contact">Kontakt</a>
                            </div>

                            <div className="flex items-center gap-x-5 md:gap-x-8">
                                <a href="/reservation" className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-vesuvius-red text-white hover:text-slate-100 hover:bg-vesuvius-red focus-visible:outline-blue-100 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200">
                                    <span>
                                        Bestil bord <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="relative top-[1] ml-2 hidden fill-transparent stroke-white stroke-2 lg:inline"><g fill-rule="evenodd"><path className="opacity-0 transition-opacity group-hover:opacity-100" d="M0 5h7"></path><path className="transition-transform group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path></g></svg>
                                    </span>   
                                </a>
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
