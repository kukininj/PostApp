package com.kukininj.PostApp.models;

import jakarta.persistence.*;

@Entity
class Conversation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    Post post;

    @ManyToOne
    User merchant;

    @ManyToOne
    User user;
}
