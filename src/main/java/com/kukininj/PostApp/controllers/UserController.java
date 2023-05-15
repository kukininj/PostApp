package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.models.requestmodels.RegisterForm;
import com.kukininj.PostApp.models.responsemodels.RegisterResponse;
import com.kukininj.PostApp.models.responsemodels.SetProfilePictureResponse;
import com.kukininj.PostApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

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
            return ResponseEntity
                    .ok(T.Success(user));
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(T.Fail(e));
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
}
