package com.kukininj.PostApp.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Picture {
    @Id
    @GeneratedValue(generator = "UUID")
    public UUID id;

    @ManyToOne
    User owner;

    public String title;
    public String filePath;
    public LocalDateTime added;
}
