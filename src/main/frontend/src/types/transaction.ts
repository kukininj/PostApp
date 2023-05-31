import { Transaction, TransactionStatusEnum } from "PostAppAPI";
import { SimpleUser } from "./user";
import { EmptyPost } from "./post";

const SimpleTransaction: Transaction = {
    id: "00000000-0000-0000-0000-000000000000",
    post: EmptyPost,
    client: SimpleUser,
    merchant: SimpleUser,
    status: TransactionStatusEnum.NotViewed,
    added: new Date(2020, 2, 3),
    notes: "",
}

export const SimpleNotViewed: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatusEnum.NotViewed
}
export const SimpleAwaitingMerchantResponse: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatusEnum.AwaitingMerchantResponse
}
export const SimpleAwaitingClientResponse: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatusEnum.AwaitingClientResponse
}
export const SimpleFinishedSuccessfully: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatusEnum.FinishedSuccessfully
}
export const SimpleRejected: Transaction = {
    ...SimpleTransaction,
    status: TransactionStatusEnum.Rejected
}
