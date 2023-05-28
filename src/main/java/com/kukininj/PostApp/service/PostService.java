package com.kukininj.PostApp.service;

import com.kukininj.PostApp.models.Picture;
import com.kukininj.PostApp.models.Post;
import com.kukininj.PostApp.models.PostCategory;
import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.models.requestmodels.FilteredFindRequest;
import com.kukininj.PostApp.repository.PictureRepository;
import com.kukininj.PostApp.repository.PostCategoryRepository;
import com.kukininj.PostApp.repository.PostRepository;
import com.kukininj.PostApp.security.SessionData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

@Service
public class PostService {
    @Autowired
    PostRepository repository;

    @Autowired
    PostCategoryRepository categoryRepository;

    @Autowired
    SessionData session;

    @Autowired
    UserService userService;
    @Autowired
    private PictureRepository pictureRepository;

    public Optional<Post> addPost(
            String title,
            String description,
            BigDecimal price,
            String area,
            String categoryName,
            Long picture_id
    ) {
        Optional<User> user = userService.getActiveUser();
        Optional<PostCategory> category = categoryRepository.findByName(categoryName);
        Optional<Picture> picture = pictureRepository.findById(picture_id);

        if (user.isEmpty() ||
                category.isEmpty() ||
                picture.isEmpty()
        ) {
            return Optional.empty();
        }

        Post post = new Post();

        post.id = null;
        post.creator = user.get();
        post.picture = picture.get();
        post.category = category.get();
        post.added = LocalDateTime.now();
        post.edited = LocalDateTime.now();
        post.title = title;
        post.description = description;
        post.price = price;
        post.area = area;

        try {
            return Optional.of(repository.save(post));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public Optional<Post> getPost(Long postId) {
        return repository.findById(postId);
    }

    public List<Post> getLatest() {
        return repository.findTop10ByOrderByIdDesc();
    }

    public List<Post> filteredFind(
            String searchQuery,
            String categoryName,
            String area,
            BigDecimal minPrice,
            BigDecimal maxPrice
    ) {
        ArrayList<Specification<Post>> filters = new ArrayList<>();

        if (searchQuery != null && searchQuery.length() > 2) {
            filters.add((root, query, cb) -> cb.like(root.get("title"), searchQuery));
        }

        var category = categoryRepository.findByName(categoryName);
        if (category.isPresent()) {
            filters.add((root, query, cb) -> cb.equal(root.get("category"), category.get()));
        }

        if (area != null) {
            filters.add((root, query, cb) -> cb.like(root.get("area"), area));
        }

        if (maxPrice != null && minPrice != null) {
            filters.add((root, query, cb) -> cb.between(root.get("price"), minPrice, maxPrice));
        } else if (maxPrice != null) {
            filters.add((root, query, cb) -> cb.lessThan(root.get("price"), maxPrice));
        } else if (minPrice != null) {
            filters.add((root, query, cb) -> cb.greaterThan(root.get("price"), minPrice));
        }

        return repository.findAll(Specification.allOf(filters));
    }
}
