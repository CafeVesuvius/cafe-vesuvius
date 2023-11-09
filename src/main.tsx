import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mui/material/styles'
import {createTheme, ThemeProvider} from "@mui/material"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import MenuPage from './pages/MenuPage.tsx'

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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/menu",
        element: <MenuPage />,
        errorElement: <ErrorPage />
    }
]);

ReactDOM.createRoot(document.getElementById('content')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App/>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
)
