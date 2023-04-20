package com.kukininj.PostApp.communication.messages;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.TextMessage;

public interface IMessage {
    public MessageType getType();

    default public JsonNode toJson(ObjectMapper mapper) {
        return mapper.valueToTree(this);
    }

    public static IMessage dispatchMessage(JsonNode obj) {
        String type = obj.asText();

        switch (type) {
            case "hello":
                return new HelloMessage();

            default:
                return ErrorMessage.JSON_PARSING_ERROR;
        }
    }
}
