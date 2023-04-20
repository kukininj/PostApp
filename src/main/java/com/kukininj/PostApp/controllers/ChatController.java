package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Message;
import com.kukininj.PostApp.models.Conversation ;
import org.springframework.session.Session;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController("/chat")
public class ChatController {
    @GetMapping("/get_messages/{chat_id}")
    public List<Message> getMessages(Session session, @PathVariable long chat_id) {
        // TODO
        return new ArrayList<>();
    }

    @GetMapping("/get_conversations")
    public List<Conversation> getConversations(Session session) {
        // TODO
        return new ArrayList<>();
    }
}
