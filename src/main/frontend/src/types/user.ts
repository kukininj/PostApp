import { SimpleAwaitingClientResponse, SimpleAwaitingMerchantResponse, SimpleFinishedSuccessfully, SimpleNotViewed, SimpleRejected, TransactionID } from "./transaction";

export const SimpleUser: User = {
    id: "0",
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@post.app",
    joinDate: new Date(2020, 2, 2),
    picture: new URL("/images/users/person.svg", document.location.href),
}

export class UserID {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
    async fetch(): Promise<User> {
        let user: User = SimpleUser;
        // TODO: actually fetch the user 
        return user;
    }
}

export interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    joinDate: Date;
    picture: URL;
}
