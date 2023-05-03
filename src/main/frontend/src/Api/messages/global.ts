export interface HelloMessage {
    message: string;
}

export interface ErrorMessage {
    message: string;
    id: number;
}

export enum MessageType {
    Hello = "hello",
    Error = "error",
}

export type TypedMessage = |
{ type: MessageType.Hello, body: HelloMessage } |
{ type: MessageType.Error, body: ErrorMessage };

