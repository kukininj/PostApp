import { ErrorMessage, TypedMessage } from './messages/global';
import { MessageType, HelloMessage } from './messages/global'

type DispatchTable = {
    [E in TypedMessage as E["type"]]: ((arg: E["body"]) => void)[];
}

export class ListenerStore {
    dispatchTable: DispatchTable = {
        [MessageType.Hello]: [],
        [MessageType.Error]: []
    }

    dispatch(message: TypedMessage) {
        switch (message.type) {
            case MessageType.Hello:
            case MessageType.Error:
                for (let listener of this.dispatchTable[message.type])
                listener(message.body as any);
            default:
                throw "received unnknown message type";
        }
    }

    addListener<T>(listener: (arg: T) => void) {

    }
};
