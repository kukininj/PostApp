package com.kukininj.PostApp.models.responsemodels;

import com.kukininj.PostApp.models.Message;

import java.util.Optional;

public class MessageResponse {
    public Optional<Message> message;

    public Optional<Ping> ping;

    public static MessageResponse ping(Long seq) {
        var r = new MessageResponse();
        r.message = Optional.empty();
        r.ping = Optional.of(new Ping(seq));
        return r;
    }

    public static MessageResponse message(Message message) {
        var r = new MessageResponse();
        r.message = Optional.of(message);
        r.ping = Optional.empty();
        return r;
    }

    public static class Ping {
        public Long seq;

        public Ping(Long seq) {
            this.seq = seq;
        }
    }
}
