package com.kukininj.PostApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.validator.internal.util.stereotypes.Lazy;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Picture {
    @Id
    @GeneratedValue
    @UuidGenerator
    public UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    public User owner;

    public String title;
    public String filePath;
    public LocalDateTime added;
}
