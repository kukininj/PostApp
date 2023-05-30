import * as React from 'react';
import { useState } from 'react';
import { Message, User } from 'PostAppAPI';
import { SimpleMessage } from '../types/message';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const MessageComponent: React.FC<{ message: Message, merchant: User, client: User }> = ({ message, merchant, client }) => {
    const theme = (message.userId == client.id ? "primary" : "white");
    const direction = (message.userId == client.id ? "row" : "row-reverse");
    const img = (message.userId == merchant.id ? merchant : client).picture?.filePath;

    return (
        <div className="row h-100 gap-3"
            style={{flexDirection: direction}}>
            <img
                className="col-auto rounded-pill bg-white d-inline"
                style={{ height: "60px", width: "60px" }}
                src={img} />
            <div className={`row bg-${theme} p-2 w-auto h-auto text-wrap text-break rounded-3 my-tooltip`}
                style={{ maxWidth: "300px" }}>
                {message.contents} {message.id}
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

    const [messages, setMessages] = useState<Message[]>([clientMsg, merchantMsg]);
    // React.useEffect(() => {
    //     Chat.getMessages({
    //         transactionId: transactionID
    //     }).then(setMessages);
    // }, []);

    const messageList = messages.map(message =>
        <MessageComponent message={message}
            merchant={merchant}
            client={client}
            key={message.id} />
    );

    return (
        <div className="d-flex flex-column flex-grow-1 justify-content-between gap-3">
            <div className="overflow-y-scroll list-unstyled d-grid gap-2">
                {messageList}
            </div>
            <Form.Group mb-3="true">
                <InputGroup>
                    <Form.Control name="minPrice" type="number" htmlSize={4} placeholder="Od" />
                    <Button>Wyślij</Button>
                </InputGroup>
            </Form.Group>
        </div>
    );
};
