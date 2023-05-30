package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Message;
import com.kukininj.PostApp.models.Transaction;
import com.kukininj.PostApp.models.requestmodels.NewTransactionRequest;
import com.kukininj.PostApp.models.responsemodels.NewTransactionResponse;
import com.kukininj.PostApp.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class TransactionController {
    @Autowired
    TransactionService service;

    @GetMapping(path = "/transaction/{transaction_id}/messages", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Message> getMessages(@PathVariable UUID transaction_id) {
        List<Message> messages = service.getTransactionMessages(transaction_id);

        return Flux.fromIterable(messages);
    }

    @PostMapping(path = "/transaction/{transaction_id}/send_message")
    public ResponseEntity<Boolean> sendMessage(
            @PathVariable UUID transaction_id,
            @RequestBody String contents
    ) {
        return ResponseEntity.ok(
                service.sendMessage(transaction_id, contents)
        );
    }

    @GetMapping("/transaction/{transaction_id}/info")
    public ResponseEntity<Optional<Transaction>>
    getInfo(@PathVariable UUID transaction_id) {
        return ResponseEntity.ok(
                service.getTransaction(transaction_id)
        );
    }

    @PostMapping("/transaction/new")
    public ResponseEntity<NewTransactionResponse>
    newTransaction(
            @RequestBody NewTransactionRequest request
    ) {
        try {
            Transaction t = service.createTransaction(request.postID);
            return NewTransactionResponse.Success(t);
        } catch (Exception e) {
            return NewTransactionResponse.Fail(e);
        }
    }
}
