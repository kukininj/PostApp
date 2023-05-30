package com.kukininj.PostApp.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import org.hibernate.annotations.UuidGenerator;

@Entity
public class Post {
    @Id
    @GeneratedValue
    @UuidGenerator
    public UUID id;

    @ManyToOne
    public User creator;
    @ManyToOne
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
