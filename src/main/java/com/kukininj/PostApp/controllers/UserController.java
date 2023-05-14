package com.kukininj.PostApp.controllers;

import com.kukininj.PostApp.communication.messages.ErrorMessage;
import com.kukininj.PostApp.communication.messages.IMessage;
import com.kukininj.PostApp.models.requestmodels.RegisterForm;
import com.kukininj.PostApp.models.responsemodels.RegisterResponse;
import com.kukininj.PostApp.models.responsemodels.SetProfilePictureResponse;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

@RestController
public class UserController {

    @PostMapping(
            value = "/register",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    RegisterResponse
    register(
            @RequestBody RegisterForm form
            ) {
        System.out.println(form.email);
        System.out.println(form.password);
        System.out.println(form.firstname);
        System.out.println(form.surname);
        return RegisterResponse.Success;
    }

    @PostMapping(
            value = "/user/setProfilePicture",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}
    )
    ResponseEntity<SetProfilePictureResponse>
    setProfilePicture(
            @RequestParam("picture") MultipartFile picture
    ) {
        // TODO: file storage functionality
        System.out.println(picture.getResource().getFilename());
        return ResponseEntity.ok(SetProfilePictureResponse.Success);
    }
}
