import * as React from "react";
import { Navigate } from "react-router-dom";

export const Logout: React.FC<{}> = () => {

    React.useEffect(() => {
        fetch("/logout")
            .then(() => {
                setTimeout(() => {
                    document.location.pathname = "/";
                }, 1000)
            })
    }, [])

    return (
        <main className="bg-light rounded-5 shadow p-3 container-lg">
            <h1 className="text-center">Wylogowywanie</h1>
        </main>
    )
}
