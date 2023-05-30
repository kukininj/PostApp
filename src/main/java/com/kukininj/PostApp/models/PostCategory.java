package com.kukininj.PostApp.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import org.hibernate.annotations.UuidGenerator;

@Entity
public class PostCategory {
    @Id
    @GeneratedValue
    @UuidGenerator
    public UUID id;

    @Column(unique = true)
    public String name;
}
