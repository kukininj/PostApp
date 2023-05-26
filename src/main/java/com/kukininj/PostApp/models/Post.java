package com.kukininj.PostApp.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    public User creator;
    @OneToOne
    public Picture picture;

    @ManyToOne
    public PostCategory category;

    public LocalDateTime added;
    public LocalDateTime edited;

    public String title;
    public String description;

    @Digits(integer = 5, fraction = 2)
    public BigDecimal price;

    public String area;
}
