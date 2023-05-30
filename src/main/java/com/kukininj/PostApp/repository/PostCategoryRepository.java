package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.PostCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface PostCategoryRepository extends JpaRepository<PostCategory, UUID> {
    public Optional<PostCategory> findByName(String name);
}
