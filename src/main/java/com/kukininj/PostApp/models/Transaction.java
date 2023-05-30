package com.kukininj.PostApp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

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
    @GeneratedValue(generator = "UUID")
    public UUID id;

    @ManyToOne
    public User client;

    @ManyToOne
    public User merchant;

    @ManyToOne
    public Post post;

    public String notes;
    public Status status;
    public LocalDateTime added;
}