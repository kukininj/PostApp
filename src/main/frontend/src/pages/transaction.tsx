import * as React from 'react';
import { ChatElement } from './chat';
import { SimpleUser } from '../types/user';
import { Link, useParams } from 'react-router-dom';
import { User } from 'PostAppAPI';
import { SimpleNotViewed } from '../types/transaction';
import { Transactions } from '../Api';
import { EmptyPost } from '../types/post';

export const TransactionPage: React.FC<{}> = () => {
    const { transactionID = "0" } = useParams();

    const [transaction, setTransaction] = React.useState(SimpleNotViewed);

    React.useEffect(() => {
        Transactions.getInfo({
            transactionId: transactionID
        }).then(transaction => {
                if (transaction) {
                    setTransaction(transaction);
                } else {
                    alert("you cant view this transaction");
                    document.location.pathname = "/login"
                }
            });
    }, [])

    const merchant = transaction.merchant || SimpleUser;
    const client = transaction.client || SimpleUser;
    const post = transaction.post || EmptyPost;

    return (
        <main className="container-lg" >
            <div className="row gap-3 p-3">
                <div className="col-md d-flex flex-column mx-auto rounded-5 p-5 pt-2 bg-light shadow"
                    style={{ height: "600px" }}>
                    <Link to={`/post/${post.id}`}
                        className="rounded-pill btn btn-info p-2 px-3 m-0 link-dark text-decoration-none mx-auto">
                        <h1>
                            {post.title}
                        </h1>
                    </Link>
                    <hr />
                    <ChatElement
                        transactionID={transactionID}
                        client={client}
                        merchant={merchant} />
                </div>
                <div className="card-group col-auto mx-auto p-0 flex-md-column gap-3">
                    <div className="card rounded-5 px-5 py-4 w-100 h-auto bg-light shadow">
                        <h2>Sprzedawca</h2>
                        <img className="img-thumbnail rounded" width="100px" height="100px" src={merchant.picture?.filePath} alt="profilowe" />
                        <div className="p-1">
                            <h2 className="p-1 px-2 bg-white rounded-pill mx-auto">{merchant.name + " " + merchant.surname}</h2>
                            <h6 className="p-1">Dołączył: {merchant.joined?.toDateString()}</h6>
                        </div>
                    </div>
                    <div className="card rounded-5 px-5 py-4 w-100 h-auto bg-light shadow">
                        <h2>Klient</h2>
                        <img className="img-thumbnail rounded" width="100px" height="100px" src={client.picture?.filePath} alt="profilowe" />
                        <div className="p-1">
                            <h2 className="p-1 px-2 bg-primary rounded-pill mx-auto">{client.name + " " + client.surname}</h2>
                            <h6 className="p-1">Dołączył: {client.joined?.toDateString()}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
