package com.kukininj.PostApp.communication.messages;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.TextMessage;

public interface IMessage {
    public MessageType getType();

    class MessageObj {
        public MessageType type;
        public IMessage body;
        public MessageObj(IMessage msg) {
            this.type = msg.getType();
            this.body = msg;
        }
    }
    default public JsonNode toJson(ObjectMapper mapper) {
        MessageObj obj = new MessageObj(this);
        System.out.println(mapper.valueToTree(this));
        System.out.println(this);
        return mapper.valueToTree(obj);
    }

    public static IMessage dispatchMessage(JsonNode obj) {
        String type = obj.get("type").asText("none");

        switch (type) {
            case "hello":
                return new HelloMessage();

            case "none":
            default:
                return ErrorMessage.JSON_PARSING_ERROR;
        }
    }
}
