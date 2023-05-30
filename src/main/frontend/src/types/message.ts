import { Message } from "PostAppAPI";
import { SimpleUser } from "./user";

export const SimpleMessage: Message = {
    get id() {
        return Math.random().toString();
    },
    contents: "tresc",
    userId: 0,
    transactionId: "",
    added: new Date(2020, 2, 2),
}
