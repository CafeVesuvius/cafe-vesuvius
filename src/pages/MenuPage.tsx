import {Menu} from '../components/Menu';
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
