package com.kukininj.PostApp.service;

import com.kukininj.PostApp.models.Message;
import org.apache.kafka.clients.admin.NewTopic;
import org.reactivestreams.Publisher;
import org.reactivestreams.Subscriber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import reactor.core.publisher.*;
import reactor.core.scheduler.Schedulers;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class KafkaService {
    @Autowired
    KafkaTemplate<String, UUID> template;

    Sinks.Many<UUID> sink = Sinks.many().multicast().directAllOrNothing();

    ConnectableFlux<UUID> uuids;

    @KafkaListener(topics = "chat", groupId = "1")
    public void chatTopicListener(UUID messageId) {
        System.out.println("kafka dzialaaa!!!! payload: ");
        System.out.println("message: " + messageId);
        // System.out.println("transaction: " + message.transaction.id);
        Sinks.EmitResult result =
                sink.tryEmitNext( messageId);

        if (result.isFailure()) {
            System.out.println("failed to emit: " + result);
        }
    }

    public Flux<UUID> getSink() {
        return sink
                .asFlux()
                .publishOn(Schedulers.parallel())
                .onBackpressureDrop(message -> System.out.printf("[STREAM] Backpressure message drop: %s", message))
                .log();
    }

    @Bean
    public NewTopic chatTopic() {
        return TopicBuilder.name("chat").build();
    }

    public void notifyIfPossible(Message message) {
        System.out.println("sending: ");
        System.out.println("user: " + message.user.id);
        System.out.println("transaction: " + message.transaction.id);

        template.send("chat", message.id);
    }
}
