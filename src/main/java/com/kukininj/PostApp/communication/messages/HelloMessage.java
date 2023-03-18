package com.kukininj.PostApp.communication.messages;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class HelloMessage implements IMessage {
    public final String message = "Hello from Server";

    public HelloMessage() {
    }

    @Override
    public String toString() {
        return "HelloMessage{message:" + message + "}";
    }

    @Override
    public MessageType getType() {
        return MessageType.HELLO;
    }
}
