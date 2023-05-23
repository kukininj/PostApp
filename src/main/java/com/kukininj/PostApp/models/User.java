package com.kukininj.PostApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="users")
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String name;
    public String surname;
    @JsonIgnore
    public String passwordHash;

    @Column(unique = true)
    public String email;
    public LocalDateTime joined;

    @OneToOne
    public Picture picture;

    @JsonIgnore
    @OneToMany
    public List<Post> favourites;

    public User() { }
}
