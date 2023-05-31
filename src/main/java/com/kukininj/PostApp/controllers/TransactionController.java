package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Message;
import com.kukininj.PostApp.models.Transaction;
import com.kukininj.PostApp.models.requestmodels.NewMessage;
import com.kukininj.PostApp.models.requestmodels.NewTransactionRequest;
import com.kukininj.PostApp.models.responsemodels.MessageResponse;
import com.kukininj.PostApp.models.responsemodels.NewTransactionResponse;
import com.kukininj.PostApp.service.TransactionService;
import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Stream;

@RestController
public class TransactionController {
    @Autowired
    TransactionService service;

    @GetMapping(
            path = "/transaction/{transaction_id}/messages"
    )
    public Optional<List<Message>> getMessages(@PathVariable UUID transaction_id) {
        return service.getTransactionMessages(transaction_id);
    }

    @Hidden
    @GetMapping(
            path = "/transaction/{transaction_id}/message_stream",
            produces = MediaType.TEXT_EVENT_STREAM_VALUE
    )
    public Flux<ServerSentEvent<MessageResponse>> getMessageStream(@PathVariable UUID transaction_id) {
        Optional<List<Message>> messageList = service.getTransactionMessages(transaction_id);
        if (messageList.isEmpty()) {
            return Flux.empty();
        }
        Stream<MessageResponse> messages =
                messageList.get()
                        .stream().map(MessageResponse::message);

        Flux<ServerSentEvent<MessageResponse>> ping = Flux.interval(Duration.ofSeconds(2))
                .map(i -> ServerSentEvent
                        .<MessageResponse>builder()
                        .event("ping")
                        .data(MessageResponse.ping(i))
                        .build()
                )
                .doFinally(signalType -> System.out.println("END"));

        Flux<ServerSentEvent<MessageResponse>> message = Flux.fromStream(messages)
                .map(i -> ServerSentEvent.<MessageResponse>builder().event("message").data(i).build());

        return Flux.merge(ping, message);
        // add .timeout(Duration.ofSeconds(1));
        // when there are problems with not enough
        // connections in Hikari pool, can also increase
        // spring.datasource.hikari.maximum-pool-size=10
        //
        // related:
        // https://stackoverflow.com/questions/70453713/springboot-jpa-repository-not-releasing-hikari-db-connection
        // https://stackoverflow.com/questions/48806452/spring-boot-webflux-netty-detect-closed-connection

    }

    @PostMapping(
            path = "/transaction/{transaction_id}/send_message",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Boolean> sendMessage(
            @PathVariable UUID transaction_id,
            @RequestBody NewMessage request
    ) {
        try {
            return ResponseEntity.ok(
                    service.sendMessage(transaction_id, request.contents)
            );
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
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