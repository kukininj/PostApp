package com.kukininj.PostApp.communication.messages;

public enum MessageType {
    HELLO("hello"), ERROR("error");

    public final String label;

    MessageType(String label) {
        this.label = label;
    }
}
