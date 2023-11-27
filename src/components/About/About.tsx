import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function AboutPageStory(){
    return (
        <div className="w-full h-full flex justify-center p-10">
            <Card sx={{ display: 'flex', elavation: 10 }}>
                <CardMedia
                    component="img"
                    sx={{ }}
                    image="../../src/assets/AboutImages/mount-vesuvius.png"
                    alt="Picture of Old Vesuvius"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Fra Vesuvius til Odense: Café Vesuvius' Smagfulde Rejse
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Min families rejse begyndte ved foden af Mount Vesuvius, hvor min oldefar, Antonio, åbnede "La Cucina del Vesuvio".
                            Efter succes i Italien besluttede min far, Giovanni, og bedstefar, Marco, at tage vores autentiske italienske smag til Odense.
                            I hjertet af byen etablerede de "Cafe Vesuvius", der hurtigt blev et lokalt yndlingssted.
                            Med traditionelle opskrifter og kærlighed til gastronomi skabte vi en oase af italiensk atmosfære.
                            I dag er Cafe Vesuvius en del af Odenses stof, hvor vi fortsætter med at dele vores families passion for mad, kultur og fællesskab.
                            Fra Vesuvius til Odense - vores historie lever i hvert bid af vores autentiske retter.
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
}