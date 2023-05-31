import * as React from 'react';
import { FormEventHandler, useState } from 'react';
import { Message, MessageFromJSONTyped, User } from 'PostAppAPI';
import { SimpleMessage } from '../types/message';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Transactions } from '../Api';

const MessageComponent: React.FC<{ message: Message, merchant: User, client: User }> = ({ message, merchant, client }) => {
    const theme = (message.userId == client.id ? "primary" : "white");
    const direction = (message.userId == client.id ? "row" : "row-reverse");
    const img = (message.userId == merchant.id ? merchant : client).picture?.filePath;

    return (
        <div className="d-flex w-100 gap-3"
            style={{ flexDirection: direction, height: "min-content" }}>
            <img
                className="col-auto rounded-pill bg-white d-inline p-1"
                style={{ height: "50px", width: "50px" }}
                src={img} />
            <div className={`row bg-${theme} p-2 w-auto h-auto text-wrap text-break rounded-3 my-tooltip`}
                style={{ maxWidth: "200px" }}>
                {message.contents}
                <div className="my-tooltiptext">{message.added?.toLocaleString()}</div>
            </div>
        </div>
    );
}

export const ChatElement: React.FC<{ transactionID: string, merchant: User, client: User }> = ({ transactionID, merchant, client }) => {
    let clientMsg = Object.assign({}, SimpleMessage);
    clientMsg.userId = client.id;
    let merchantMsg = Object.assign({}, SimpleMessage);
    merchantMsg.userId = merchant.id;

    const [messages, setMessages] = useState<Message[]>([]);

    React.useEffect(() => {
        let saved: Message[] = [];
        const source = new EventSource(`/transaction/${transactionID}/message_stream`);
        if (source == null) {
            console.error("could not create EventSource");
            return;
        } else {
            source.onmessage = (response) => {
                const data = JSON.parse(response.data);
                console.log(response.type);
                if (data.message) {
                    const message = MessageFromJSONTyped(data.message, true);
                    saved.push(message);
                    console.log(saved);
                    setMessages(Array.from(saved));

                } else if (data.ping || response.type == "ping") {
                    console.log("recieved ping");
                } else {

                    console.error("unnknown message", data)
                }
            }
            source.onopen = (e) => {
                console.log("openning new source", e);
            }
        }
    }, []);

    const messageList = messages.map(message =>
        <MessageComponent message={message}
            merchant={merchant}
            client={client}
            key={message.id} />
    );

    const submit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const message = formData.get("message")?.toString();
        console.log(message);
        if (message) {
            event.currentTarget.reset();
            Transactions.sendMessage({
                transactionId: transactionID,
                newMessage: {
                    contents: message
                }
            }).then(response => {
                if (response != true) {
                    console.error("failed to send message");
                }
            })
        }
    }

    return (
        <div className="d-flex flex-column flex-grow-1 justify-content-between gap-3">
            <div className="overflow-scroll list-unstyled d-flex flex-column-reverse gap-2"
                style={{ height: "400px" }}>
                {messageList}
            </div>
            <Form onSubmit={submit} mb-3="true">
                <InputGroup>
                    <Form.Control name="message" type="text" placeholder="Wiadomość" />
                    <Button type="submit">Wyślij</Button>
                </InputGroup>
            </Form>
        </div>
    );
};
