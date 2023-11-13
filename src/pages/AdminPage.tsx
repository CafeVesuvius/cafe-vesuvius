import SignIn from "../components/SignIn.tsx";
import {useState} from "react";

export default function AdminPage() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    if (isSignedIn) {
        return (
            <SignIn setIsSignedIn={setIsSignedIn} />
        )
    } else {

    }
}