import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Banner from "../Banner.tsx";

export default function ContactList() {
    return (
        <div>
            <Banner title="Kontakt" highlight="Os" line1="Spørgsmål og andre henvendelser: kontakt@cafevesuvius.com (ikke til bordbestilling)." line2="Vi bestræber os på at besvare alle henvendelser indenfor 24 timer. Der må dog forventes længere svartid i weekender."/>
            <div className="w-full h-full flex justify-center pt-20">
                <Card sx={{ minWidth: 130, maxWidth: 300 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Odense
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Odensevej 123, 5000 Odense C <br/>
                            +45 12345678
                        </Typography>
                        <Typography variant="body2">
                            Åbningstider: <br /> Mandag-Torsdag: 16:00-22:00 <br/> Fredag-Søndag: 12:00-23:00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}