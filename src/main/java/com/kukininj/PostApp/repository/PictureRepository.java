package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.Picture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PictureRepository extends JpaRepository<Picture, Long> {
}
