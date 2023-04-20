package com.kukininj.PostApp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

enum Status {
    NotViewed,
    AwaitingMerchantResponse,
    AwaitingClientResponse,
    FinishedSuccessfully,
    Rejected;
}
@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    User client;

    @ManyToOne
    User merchant;

    @ManyToOne
    Post post;

    String notes;
    Status status;
    LocalDateTime added;
}