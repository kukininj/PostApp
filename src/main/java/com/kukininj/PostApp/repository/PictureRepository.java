package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface PictureRepository extends JpaRepository<Picture, UUID> {
    Optional<Picture> findTopByOrderById();
}
