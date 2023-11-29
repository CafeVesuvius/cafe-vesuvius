import {Overview} from '../components/Overview';
import MenuAdmin from "../components/Menu/MenuAdmin.tsx";
import {Menu} from "../components/Menu";

function OverviewPage() {
    var sessionCheck = localStorage.getItem('session');

    return (
        <>
            {sessionCheck ? <Overview/> : <> </>}
        </>
    )
}

export default OverviewPage