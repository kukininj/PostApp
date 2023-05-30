package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Message;
import com.kukininj.PostApp.models.Transaction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class TransactionController {
    @GetMapping("/transaction/{transaction_id}/get_messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String transaction_id) {
        // TODO
        return ResponseEntity.ok(new ArrayList<>());
    }

    @GetMapping("/transaction/{transaction_id}/info")
    public ResponseEntity<Optional<Transaction>>
    getInfo(@PathVariable UUID transaction_id) {
        return ResponseEntity.ok(Optional.empty());
    }
}
