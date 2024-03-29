import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import { createRoot } from "react-dom/client"
import Navbar from "./pages/navbar";
import PostPage from "./pages/post-page";
import AccountPage from "./pages/account";
import { AppContext, SetUser, State } from "./Api/app-context";
import ErrorPage from "./pages/error";
import { Register } from "./pages/register";
import { Users } from "./Api";
import { Logout } from "./pages/logout";
import { NewPostPage } from "./pages/newpost-page";
import { Search } from "./pages/search";
import { TransactionPage } from "./pages/transaction";

function App() {
    const [state, dispatch] = React.useReducer(
        State.reducer, new State()
    );

    React.useEffect(() => {
        Users.getUserInfo()
            .then((user) => {
                dispatch(new SetUser(user));
            })
            .catch((r) => {
                console.log(r);
            })
    }, [])

    return (
        <AppContext.Provider value={state}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/search' Component={Search} />
                    <Route path='/post/:postID' Component={PostPage} />
                    <Route path='/transaction/:transactionID' Component={TransactionPage} />
                    <Route path='/account' Component={AccountPage} />
                    <Route path='/logout' Component={Logout} />
                    <Route path='/newpost' Component={NewPostPage} />
                    <Route path='*' Component={ErrorPage} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error('Failed to find root element')

const root = createRoot(rootElement);

root.render(
    <App />
);
