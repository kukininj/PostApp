package com.kukininj.PostApp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    User owner;

    public String title;
    public String filePath;
    public LocalDateTime added;
}
