import { PostID } from "./post";
import { UserID } from "./user";

enum TransactionStatus {
    NotViewed,
    AwaitingMerchantResponse,
    AwaitingClientResponse,
    FinishedSuccessfully,
    Rejected
}

const SimpleTransaction: Transaction = {
    id: "0",
    title: "tytuł",
    picture: new URL("/images/posts/question-square-fill.svg", document.location.href),
    client: new UserID("0"),
    merchant: new UserID("0"),
    Post: new PostID("0"),
    status: TransactionStatus.NotViewed
}

export const SimpleNotViewed: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatus.NotViewed
}
export const SimpleAwaitingMerchantResponse: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatus.AwaitingMerchantResponse
}
export const SimpleAwaitingClientResponse: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatus.AwaitingClientResponse
}
export const SimpleFinishedSuccessfully: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatus.FinishedSuccessfully
}
export const SimpleRejected: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatus.Rejected
}

export class TransactionID {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
    async fetch(): Promise<Transaction> {
        let transactions = [SimpleRejected, SimpleFinishedSuccessfully, SimpleAwaitingClientResponse, SimpleAwaitingMerchantResponse, SimpleAwaitingClientResponse, SimpleNotViewed];
        // TODO: actually fetch the Transaction 
        return transactions[Math.floor(Math.random() * transactions.length)];
    }
}

export interface Transaction {
    id: string;
    title: string;
    picture: URL;
    client: UserID;
    merchant: UserID;
    Post: PostID;
    status: TransactionStatus;
}
