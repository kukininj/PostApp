import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import { createRoot } from "react-dom/client"
import Navbar from "./pages/navbar";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/login' Component={Login} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error('Failed to find root element')
const root = createRoot(rootElement);

root.render(
    <App />
);
