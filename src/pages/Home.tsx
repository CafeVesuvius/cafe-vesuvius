import * as React from 'react';
import MenuBar from "../components/MenuBar.tsx";
import Banner from '../components/Banner.tsx';

function Home() {
    return (
        <>
            <Banner title="Lækker mad, god stemning og hyggelig" highlight="atmosfære" line1="Vi har et bredt udvalg af lækre retter, der passer til enhver smag." line2="Vi glæder os til at se dig!" buttonText="Bestil bord"/>
            <MenuBar />
        </>
    )
}

export default Home
