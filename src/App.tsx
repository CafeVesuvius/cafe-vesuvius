import './App.css'
import Header from "./components/Header.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import ReservationPage from "./pages/ReservationPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import {useState} from "react";
import HeaderAdmin from "./components/HeaderAdmin.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/menu",
        element: <MenuPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/reservation",
        element: <ReservationPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/admin",
        element: <AdminPage />,
        errorElement: <ErrorPage />
    }
]);

function App() {
    const [sessionCheck] = useState(localStorage.getItem('session'));

    return (
        <>
            {sessionCheck ? <HeaderAdmin/> : <Header/>}
            <RouterProvider router={router} />
        </>
    )
}

export default App
