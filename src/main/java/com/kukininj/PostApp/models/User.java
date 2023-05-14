package com.kukininj.PostApp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;
    String surname;

    @Column(unique = true)
    String email;
    LocalDateTime joined;

    @OneToMany
    List<Post> favourites;
}
