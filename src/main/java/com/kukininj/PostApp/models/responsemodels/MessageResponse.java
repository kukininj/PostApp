package com.kukininj.PostApp.models.responsemodels;

import com.kukininj.PostApp.models.Message;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

public class MessageResponse {
    public UUID id;
    public UUID userId;
    public UUID transactionId;
    public LocalDateTime added;
    public String contents;
    public MessageResponse() { }
    public static MessageResponse fromMessage(Message m) {
        var r = new MessageResponse();
        r.added = m.added;
        r.id = m.id;
        r.userId = m.user.id;
        r.transactionId = m.transaction.id;
        r.contents = m.contents;
        return r;
    }

}
