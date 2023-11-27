import Banner from "../components/Banner";
import {About} from "../components/About"

export default function AboutPage() {
    return (
        <>
            <Banner title="Du spiser," highlight="vi laver mad" line1="Kom og få en oplevelse hos Café Vesuvius." line2="Vi har plads til dig!" buttonText="Til Italien" link="https://earth.google.com/web/search/caf%c3%a9+vesuvius/@40.8087877,14.3539076,69.78183763a,621.10813589d,35y,0h,0t,0r/data=CnkaTxJJCiUweDEzM2JhN2NhMjAwMDAzYTc6MHhmYWUyMzg1MDY5MWI4MDY4GZgLpquFZ0RAIQ0JKYk2tSxAKg5jYWbDqSB2ZXN1dml1cxgCIAEiJgokCS1B-CsogkRAEfmKyDE8S0RAGQJytawqGS5AIUCI0IjFzytAOgMKATA"/>
            <About />
        </>
    );
}