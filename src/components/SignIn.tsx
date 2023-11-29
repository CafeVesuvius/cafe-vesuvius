import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {CV_API} from "../config";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Café Vesuvius
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

var savedUsername = localStorage.getItem("user");
var savedPassword = localStorage.getItem("pass");
var checkboxCheckUncheck = JSON.parse(localStorage.getItem("remember"));

const handleRememberLogin = () => {
    if (!checkboxCheckUncheck) {
        localStorage.setItem("remember", JSON.stringify(true));
    } else {
        localStorage.removeItem("remember");
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
    }
}

export default function SignIn(props) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (!data.get('username') || !data.get('password')) {
            alert('Du mangler at indtaste oplysninger.');
        } else {
            try {
                await axios.post(CV_API.BASE_URL + "Authentication", {userName: data.get('username'), password: data.get('password')}).then((res) => {
                    if (res.status == 200) {
                        props.setIsSignedIn(true);
                        localStorage.setItem('session', JSON.stringify(res.data));

                        localStorage.setItem('user', data.get('username') as string);
                        localStorage.setItem('pass', data.get('password') as string);
                    }
                })
            } catch (error) {
                alert(error);
            }
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'warning.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            defaultValue={savedUsername}
                            color="warning"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Brugernavn"
                            name="username"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            defaultValue={savedPassword}
                            color="warning"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Kodeord"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox color="warning" defaultChecked={JSON.parse(checkboxCheckUncheck)}
                                               onClick={handleRememberLogin}/>}
                            label="Husk mig"
                        />
                        <Button
                            color="error"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Glemt kodeord?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}