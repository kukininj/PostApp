package com.kukininj.PostApp.models.responsemodels;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.kukininj.PostApp.models.User;

import java.util.Optional;

public class RegisterResponse {
    enum Status {
        OK,
        FAIL
    }
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

    public static RegisterResponse Fail(Exception e) {
        return new RegisterResponse(e);
    }
    public static RegisterResponse Success(User user) {
        return new RegisterResponse(user);
    }
}
