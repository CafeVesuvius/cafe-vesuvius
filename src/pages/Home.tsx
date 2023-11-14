import MenuBar from "../components/MenuBar.tsx";
import Banner from '../components/Banner.tsx';

function Home() {

    if(localStorage.getItem('session') == null) {
        return (
            <>
                <Banner title="Lækker mad, god stemning og hyggelig" highlight="atmosfære" line1="Vi har et bredt udvalg af lækre retter, der passer til enhver smag." line2="Vi glæder os til at se dig!" buttonText="Bestil bord" link="/reservation"/>
                <MenuBar />
            </>
        )
    }
    else {
        localStorage.removeItem('session');
    }
}

export default Home
