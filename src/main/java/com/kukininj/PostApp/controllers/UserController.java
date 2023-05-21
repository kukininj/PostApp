package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.models.requestmodels.RegisterForm;
import com.kukininj.PostApp.models.responsemodels.RegisterResponse;
import com.kukininj.PostApp.models.responsemodels.SetProfilePictureResponse;
import com.kukininj.PostApp.security.Session;
import com.kukininj.PostApp.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(
            value = "/login"
    )
    void login(
            String email,
            String password,
            HttpServletResponse response
    ) {
        var user = userService.authenticate(email, password);

        try {
            if (user.isPresent()) {
                response.sendRedirect("/account");
            }
            else {
                response.sendRedirect("/login?error");
            }
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @PostMapping(
            value = "/register",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    <T extends RegisterResponse>
    ResponseEntity<RegisterResponse>
    register(
            @RequestBody RegisterForm form
    ) {
        try {
            User user = userService.addUser(form.email, form.password, form.surname, form.firstname);
            return T.Success(user);
        } catch (Exception e) {
            return T.Fail(e);
        }
    }

    @PostMapping(
            value = "/user/setProfilePicture",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}
    )
    <T extends SetProfilePictureResponse>
    ResponseEntity<SetProfilePictureResponse>
    setProfilePicture(
            @RequestParam("picture") MultipartFile picture
    ) {
        // TODO: file storage functionality
        System.out.println(picture.getResource().getFilename());
        return ResponseEntity.ok(T.Success());
    }

    @GetMapping(
            value = "/user/getActiveUsers"
    )
    ResponseEntity<List<User>>
    getActiveUsers() {
        return ResponseEntity.ok(userService.getActiveUsers());
    }

    @GetMapping(
            value = "/user/getUserInfo"
    )
    ResponseEntity<Optional<User>>
    getUserInfo() {
        return ResponseEntity.ok(userService.getActiveUser());
    }
}
