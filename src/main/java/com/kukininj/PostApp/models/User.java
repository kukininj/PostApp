package com.kukininj.PostApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="users")
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    @UuidGenerator
    public UUID id;

    public String name;
    public String surname;
    @JsonIgnore
    public String passwordHash;

    @Column(unique = true)
    public String email;
    public LocalDateTime joined;

    @ManyToOne
    public Picture picture;

    @JsonIgnore
    @OneToMany
    public List<Post> favourites;

    public User() { }
}
