package com.kukininj.PostApp.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @OneToOne
    User creator;

    LocalDateTime added;
    LocalDateTime edited;

    String title;
    String description;

    @Digits(integer = 5, fraction = 2)
    BigDecimal price;

    String area;
}
