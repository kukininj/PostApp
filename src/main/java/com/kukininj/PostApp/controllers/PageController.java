package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.Picture;
import com.kukininj.PostApp.models.Post;
import com.kukininj.PostApp.models.PostCategory;
import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.repository.PictureRepository;
import com.kukininj.PostApp.repository.PostCategoryRepository;
import com.kukininj.PostApp.repository.PostRepository;
import com.kukininj.PostApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Controller
public class PageController {

    @GetMapping(path = {
            "/",
            "/login",
            "/account",
            "/search/**",
            "/post/{post_id}",
            "/error",
    }, produces = MediaType.TEXT_HTML_VALUE)
    public String getSinglePage() {
        return "/index.html";
    }

    @Autowired
    ApplicationContext spring;

    @GetMapping(path = {
            "/INITIALIZE"
    })
    public String initialize() {
        try {
            var users = spring.getBean(UserRepository.class);
            User client = new User();
            client.id = null;
            client.email = "client@postapp";
            client.name = "klient";
            client.surname = "kowalski";
            client.joined = LocalDateTime.now();
            client.picture = null;
            client.passwordHash = BCrypt.hashpw("123", BCrypt.gensalt());

            client = users.save(client);

            User merchant = new User();
            merchant.id = null;
            merchant.email = "merchant@postapp";
            merchant.name = "sprzedawca";
            merchant.surname = "nowak";
            merchant.joined = LocalDateTime.now();
            merchant.picture = null;
            merchant.passwordHash = BCrypt.hashpw("123", BCrypt.gensalt());

            merchant = users.save(merchant);

            var pics = spring.getBean(PictureRepository.class);
            Picture user_pic = new Picture();
            user_pic.added = LocalDateTime.now();
            user_pic.id = null;
            user_pic.filePath = "/images/users/person.svg";
            user_pic.title = "default client picture";
            user_pic.owner = client;

            Picture merchant_pic = new Picture();
            merchant_pic.added = LocalDateTime.now();
            merchant_pic.id = null;
            merchant_pic.filePath = "/images/users/piggy-bank-fill.svg";
            merchant_pic.title = "default merchant picture";
            merchant_pic.owner = merchant;

            Picture post_pic = new Picture();
            post_pic.added = LocalDateTime.now();
            post_pic.id = null;
            post_pic.filePath = "/images/posts/question-square-fill.svg";
            post_pic.title = "default post picture";
            post_pic.owner = merchant;

            user_pic = pics.save(user_pic);
            merchant_pic = pics.save(merchant_pic);
            post_pic = pics.save(post_pic);

            var categories = spring.getBean(PostCategoryRepository.class);
            PostCategory moto = new PostCategory();
            moto.id = null;
            moto.name = "Motoryzacja";

            categories.save(moto);

            var posts = spring.getBean(PostRepository.class);
            Post post = new Post();
            post.id = null;
            post.title = "testowe ogloszenie";
            post.description = "powazny opis";
            post.price = BigDecimal.valueOf(1000);
            post.area = "Kraków";
            post.category = moto;
            post.creator = merchant;
            post.picture = post_pic;
            post.added = LocalDateTime.now();
            post.edited = LocalDateTime.now();

            post = posts.save(post);

            Post post2 = new Post();
            post2.id = null;
            post2.title = "kolejne ogloszenie";
            post2.description = "inny opis";
            post2.price = BigDecimal.valueOf(1500);
            post2.area = "Kraków";
            post2.category = moto;
            post2.creator = merchant;
            post2.picture = post_pic;
            post2.added = LocalDateTime.now();
            post2.edited = LocalDateTime.now();

            post2 = posts.save(post2);

            client.picture = user_pic;
            merchant.picture = merchant_pic;

            users.save(client);
            users.save(merchant);

            return "ok";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
