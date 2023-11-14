import SignIn from "../components/SignIn.tsx";
import {useState} from "react";
import MenuAdmin from "../components/Menu/MenuAdmin.tsx";

export default function AdminPage() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    var sessionCheck = localStorage.getItem('session');

    if (sessionCheck !== null) {
        //console.log(isSignedIn);
        return (
            <>
                <MenuAdmin/>
            </>
        )
    } else {
        return (
            <SignIn setIsSignedIn={setIsSignedIn} />
        )
    }
}