import { Transaction } from "PostAppAPI"
import * as React from "react"
import { Link } from "react-router-dom"


export const TransactionCardSmall: React.FC<{
    transaction: Transaction
}> = ({ transaction }) => {
    return (
        <li key={transaction.id} className="card bg-light" style={{width: "calc(25% - 15px)"}} >
            <Link to={`/transaction/${transaction.id}`} >
                <img className="card-img-top w-100" style={{objectFit: "cover", aspectRatio: "2"}} src={transaction.post?.picture?.filePath || ""} alt="obrazek" />
            </Link>
            <div className="card-body d-flex justify-content-between">
                <p className="card-text">{transaction.post?.title}</p>
                <p className="card-text">{transaction.status}</p>
            </div>
        </li>
    )
}

export const TransactionSmallList: React.FC<{
    transactions: Array<Transaction>
}> = ({ transactions }) => {

    const cards = transactions.map((transaction) => {
        return <TransactionCardSmall transaction={transaction} />;
    })

    return (
        <ul className="d-flex flex-wrap gap-2 show-only-first-4">
            {cards}
        </ul>
    )
}
