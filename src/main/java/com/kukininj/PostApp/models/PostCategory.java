package com.kukininj.PostApp.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;

@Entity
public class PostCategory {
    @Id
    @GeneratedValue(generator = "UUID")
    public UUID id;

    @Column(unique = true)
    public String name;
}
