package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Message;
import com.kukininj.PostApp.models.Conversation ;
import org.springframework.http.ResponseEntity;
import org.springframework.session.Session;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController("/chat")
public class ChatController {
    @GetMapping("/get_messages/{chat_id}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable long chat_id) {
        // TODO
        return ResponseEntity.ok(new ArrayList<>());
    }

    @GetMapping("/get_conversations")
    public ResponseEntity<List<Conversation>> getConversations() {
        // TODO
        return ResponseEntity.ok(new ArrayList<>());
    }
}
