import {Menu} from '../components/Menu';
import HeaderAdmin from "../components/HeaderAdmin.tsx";
import Header from "../components/Header.tsx";
import MenuAdmin from "../components/Menu/MenuAdmin.tsx";

function MenuPage() {
    var sessionCheck = localStorage.getItem('session');

    return (
        <>
            {sessionCheck ? <MenuAdmin/> : <Menu/>}
        </>
    )
}

export default MenuPage
