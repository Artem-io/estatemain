import { useState } from "react";
import Login from "./sections/Login.tsx";
import Main from "./sections/Main.tsx";

export default function AdminPanel() {
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <div className="container mx-auto">
            {!auth ? <Login setAuth={setAuth} /> : <Main />}
        </div>
    );
}