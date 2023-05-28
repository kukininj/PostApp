package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.Post;
import com.kukininj.PostApp.models.PostCategory;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

// https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#reference
@Repository
public interface PostRepository extends JpaRepository<Post, Long>, JpaSpecificationExecutor<Post> {
    List<Post> findTop10ByOrderByIdDesc();
}