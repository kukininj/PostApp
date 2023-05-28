package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Picture;
import com.kukininj.PostApp.models.Post;
import com.kukininj.PostApp.models.requestmodels.AddPostRequest;
import com.kukininj.PostApp.models.requestmodels.FilteredFindRequest;
import com.kukininj.PostApp.repository.PostRepository;
import com.kukininj.PostApp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.session.Session;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Filter;

@RestController
public class PostController {
    @Autowired
    PostService service;

    @GetMapping(
            value = "/post/get/{post_id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Optional<Post>> getPost(@PathVariable long post_id) {
        return ResponseEntity.ok(service.getPost(post_id));
    }

    @PostMapping(
            value = "/post/create",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Optional<Post>> addPost(
            @RequestBody AddPostRequest request
    ) {
        BigDecimal price = new BigDecimal(request.price_str);

        return ResponseEntity.ok(
                service.addPost(
                        request.title,
                        request.description,
                        price,
                        request.area,
                        request.category,
                        // TODO: change to request.picture_id when Picture functionality is finished
                        1L
                )
        );
    }

    @GetMapping(
            value = "/post/latest",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Post>> getLatest() {
        return ResponseEntity.ok(
                service.getLatest()
        );
    }

    @PostMapping(
            value = "/post/filter",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Post>> getByFilter(
            @RequestBody FilteredFindRequest filter
    ) {
        return ResponseEntity.ok(
                service.filteredFind(
                        filter.query,
                        filter.category,
                        filter.area,
                        filter.minPrice,
                        filter.maxPrice
                )
        );
    }
}
