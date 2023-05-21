package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Post;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.session.Session;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController("/post")
public class PostController {
    @GetMapping(
            value = "/get/{post_id}",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Post> getPost(@PathVariable long post_id) {
        // TODO
        return ResponseEntity.ok(null);
    }

    @PutMapping(
            value = "/create/{post_id}",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Post> addPost(@PathVariable long post_id) {
        // TODO
        return ResponseEntity.ok(null);
    }
}
