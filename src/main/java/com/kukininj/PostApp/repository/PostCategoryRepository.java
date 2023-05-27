package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.PostCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostCategoryRepository extends JpaRepository<PostCategory, Long> {
    public Optional<PostCategory> findByName(String name);
}
