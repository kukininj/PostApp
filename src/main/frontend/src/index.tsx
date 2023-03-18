import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import { createRoot } from "react-dom/client"

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/login' Component={Login} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(
    <App />
);
