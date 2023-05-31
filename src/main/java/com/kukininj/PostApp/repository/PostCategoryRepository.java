package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.PostCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PostCategoryRepository extends JpaRepository<PostCategory, UUID> {
    public Optional<PostCategory> findByName(String name);
}
