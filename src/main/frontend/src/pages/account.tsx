import * as React from 'react';
import { useParams, redirect, Link } from 'react-router-dom'
import { SimpleAwaitingClientResponse, SimpleFinishedSuccessfully, SimpleNotViewed, SimpleRejected } from '../types/transaction'
import { AppContext } from '../Api/app-context'
import { SimpleUser } from '../types/user';
import { TransactionSmallList } from './transaction-components';
import { Users } from '../Api';

const AccountPage: React.FC<{}> = () => {
    const state = React.useContext(AppContext);
    const [pending, setPending] = React.useState([SimpleAwaitingClientResponse, SimpleNotViewed, SimpleNotViewed, SimpleNotViewed, SimpleNotViewed, SimpleNotViewed]);
    const [finished, setFinished] = React.useState([SimpleRejected, SimpleFinishedSuccessfully]);

    const user = state.user || SimpleUser;

    return (
        <main className="container-lg">
            <div className="row m-2 gap-2">
                <div className="col-md-auto bg-light rounded-5 p-2 p-md-5">
                    <img className="d-block img-thumbnail mx-auto" width="100px" height="100px" src={user.picture?.filePath}  alt="profilowe" />
                    <div className="p-1">
                        <h2 className="p-1 text-center">{user.name + " " + user.surname}</h2>
                        <h6 className="p-1 text-center">{user.email}</h6>
                    </div>
                </div>
                <div className="col-md bg-light rounded-5 px-2 py-3 p-md-5">
                    <div className="d-flex p-2 justify-content-between">
                        <h2>Oczekujące </h2><h2>{user.id}</h2>
                    </div>
                    <div className="d-flex p-2 justify-content-between">
                        <h2>Zakończone </h2><h2>{user.id}</h2>
                    </div>
                    <div className="d-flex p-2 justify-content-between">
                        <h2>Ulubione   </h2><h2>{user.id}</h2>
                    </div>
                    <div className="d-flex p-2 justify-content-between">
                        <h2>Oferty     </h2><h2>{user.id}</h2>
                    </div>
                </div>
            </div>
            <div className="row bg-light rounded-5 px-2 py-2 px-md-5 m-2">
                <div className="d-flex p-2 justify-content-between">
                    <h5>Oczekujące</h5>
                    <Link to="/pending" className="link-dark text-decoration-none">Więcej <i className="bi bi-chevron-double-right"></i></Link>
                </div>
                <TransactionSmallList transactions={pending} />
            </div>
            <div className="row bg-light rounded-5 px-2 py-2 px-md-5 m-2">
                <div className="d-flex p-2 justify-content-between">
                    <h5>Zakończone</h5>
                    <Link to="/finished" className="link-dark text-decoration-none">Więcej <i className="bi bi-chevron-double-right"></i></Link>
                </div>
                <TransactionSmallList transactions={finished} />
            </div>
        </main>
    );
}

export default AccountPage;
