import SignIn from "../components/SignIn.tsx";
import {useState} from "react";

export default function AdminPage() {
    const [, setIsSignedIn] = useState(false);

    var sessionCheck = localStorage.getItem('session');

    if (sessionCheck !== null) {
        window.location.replace('/menu');
    } else {
        return (
            <SignIn setIsSignedIn={setIsSignedIn} />
        )
    }
}