package com.kukininj.PostApp.communication.messages;

public class ErrorMessage implements IMessage {
    String message;

    static ErrorMessage JSON_PARSING_ERROR = new ErrorMessage("json parsing error");

    public ErrorMessage(String message) {
        this.message = message;
    }
    @Override
    public MessageType getType() {
        return MessageType.ERROR;
    }
}
