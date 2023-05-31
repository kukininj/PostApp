package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PictureRepository extends JpaRepository<Picture, UUID> {
    Optional<Picture> findTopByOrderById();
}
