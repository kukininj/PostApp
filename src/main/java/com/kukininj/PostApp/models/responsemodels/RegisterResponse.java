package com.kukininj.PostApp.models.responsemodels;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.kukininj.PostApp.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public class RegisterResponse {
    public final Optional<String> error;
    public final Optional<User> user;

    RegisterResponse(Exception e) {
        this.error = Optional.of(e.getMessage());
        this.user = Optional.empty();
    }

    RegisterResponse(User user) {
        this.error = Optional.empty();
        this.user = Optional.of(user);
    }

    public static ResponseEntity<RegisterResponse> Fail(Exception e) {
        return ResponseEntity.ok(new RegisterResponse(e));
    }
    public static ResponseEntity<RegisterResponse> Success(User user) {
        return ResponseEntity.ok(new RegisterResponse(user));
    }
}
