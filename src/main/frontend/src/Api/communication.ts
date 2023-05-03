import { MessageType, HelloMessage, TypedMessage } from "./messages/global";

export class Communication {
    private ws: WebSocket;

    private constructor(){}

    public static open() {
        let conn = new Communication();
        conn.ws = new WebSocket(`ws://${document.location.host}/ws`);
        conn.ws.onopen = (event) => {
            let message: HelloMessage = { message: "my name is Jeff"};
            conn.ws.send(JSON.stringify(message));
        }

        return conn;
    }

    public dispatch(obj: any) {
        if (!(obj.type in MessageType)) {
            throw "message has no valid type field";
        }
        let message = obj as TypedMessage; // scarry
        switch (message.type) {
            case MessageType.Hello:
                console.log("received Hello from server: ", message.body.message);
                break
            default:
                throw "message has unknown type";
        }
    }
}
