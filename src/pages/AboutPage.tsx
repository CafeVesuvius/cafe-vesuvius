import { useRouteError } from "react-router-dom";

export default function AboutPage() {
    const error: unknown = useRouteError();
    console.error(error);

    return (
        <div id="about-page">
            <h1>Cafe Vesuvius</h1>
            <p>Om os\n\nVelkommen til Cafe Vesuvius, en autentisk familierestaurant med dybe rødder i det lokale samfund. Vores historie går tilbage til 1978, hvor vores stifter, Luigi Di Martino, åbnede dørene til vores første restaurant med en drøm om at bringe et lille stykke af Italien til vores hjemby.\n\nI mere end 40 år har vi haft den ære og glæde af at dele vores kærlighed til god mad og varm gæstfrihed med vores gæster. Vores menu er inspireret af de traditionelle italienske retter, som Luigi voksede op med, og vi er stolte af at bruge de bedste og friskeste råvarer i vores retter.\n\nVores signaturret, Vesuvius Burger, har været en favorit blandt vores gæster siden vi introducerede den for mange år siden. Denne saftige burger er lavet af førsteklasses oksekød, toppet med hjemmelavet tomatsovs, frisk mozzarella og et strejf af basilikum. Det er en smagsoplevelse som ingen anden!\n\nVi er taknemmelige for den støtte, vi har modtaget fra vores lokalsamfund gennem årene, og vi glæder os til at fortsætte med at være et samlingspunkt for familier og venner i mange år fremover.\n\nTak for at besøge os, og velbekomme hos Cafe Vesuvius!</p>
            <p>
                <i>{(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText}</i>
            </p>
        </div>
    );
}