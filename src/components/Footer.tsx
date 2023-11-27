import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer(){

    return (
            <footer className="bg-footer-red backdrop-blur-md p-5 flex-grow mt-auto w-full relative text-white">
                <div className="relative z-50 flex justify-evenly">
                    <div>
                        <nav>
                            <ul>
                                <li> <a href={"."} aria-label={"Forside"} title={"Forside"}>Forside</a> </li>
                                <li> <a href={"/about"} aria-label={"Om Os"} title={"Om Os"}>Om Os</a> </li>
                                <li> <a href={"/menu"} aria-label={"Menu Kort"} title={"Menu Kort"}>Menu Kort</a> </li>
                                <li> <a href={"/reservation"} aria-label={"Reservation"} title={"Reservation"}>Reservation</a> </li>
                                <li> <a href={"/contact"} aria-label={"Kontakt"} title={"Kontakt"}>Kontakt</a> </li>
                            </ul>
                        </nav>
                        <br/>
                        <p>Socials: </p>
                        <a href={"#"} aria-label={"Cafe Vesuvius Facebook"} title={"Cafe Vesuvius Facebook"}>
                            <FacebookIcon />
                        </a>
                        <a href={"#"} title={"Cafe Vesuvius LinkedIn"}>
                            <LinkedInIcon />
                        </a>
                        <a href={"#"} title={"Cafe Vesuvius Instagram"}>
                            <InstagramIcon />
                        </a>
                    </div>
                    <div>
                        <h1>Åbningstider og Kontakt:</h1>
                        <p>
                            Odense <br/>
                            kontakt@cafevesuvius.com <br/>
                            +45 12345678 <br/>
                            Odensevej 123, 5000 Odense C <br/>
                            Åbningstider: <br /> Mandag-Torsdag: 16:00-22:00 <br/> Fredag-Søndag: 12:00-23:00
                        </p>
                    </div>
                </div>
            </footer>);
}