import { SimpleAwaitingClientResponse, SimpleAwaitingMerchantResponse, SimpleFinishedSuccessfully, SimpleNotViewed, SimpleRejected, TransactionID } from "./transaction";
import { User } from "PostAppAPI"
export const SimpleUser: User = {
    id: "00000000-0000-0000-0000-000000000000",
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@post.app",
    joined: new Date(2020, 2, 2),
    picture: {
        filePath: "/images/users/person.svg",
        id: "00000000-0000-0000-0000-000000000000",
        title: "profilowe Jana",
        added: new Date(2020, 2, 2),
    }
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
