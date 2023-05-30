package com.kukininj.PostApp.models;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Picture {
    @Id
    @GeneratedValue
    @UuidGenerator
    public UUID id;

    @ManyToOne
    User owner;

    public String title;
    public String filePath;
    public LocalDateTime added;
}
