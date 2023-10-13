import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mui/material/styles'
import {createTheme, ThemeProvider} from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page.tsx";

const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fcfcfc',
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
]);

ReactDOM.createRoot(document.getElementById('content')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
