package com.kukininj.PostApp;

import com.kukininj.PostApp.models.Picture;
import com.kukininj.PostApp.models.Post;
import com.kukininj.PostApp.models.PostCategory;
import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.repository.PictureRepository;
import com.kukininj.PostApp.repository.PostCategoryRepository;
import com.kukininj.PostApp.repository.PostRepository;
import com.kukininj.PostApp.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@SpringBootApplication
public class PostAppApplication {

	public static void main(String[] args) {
		var spring = SpringApplication.run(PostAppApplication.class, args);
	}
}
