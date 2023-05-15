package com.kukininj.PostApp.models.responsemodels;

import org.springframework.http.ResponseEntity;

import java.util.Optional;

public class SetProfilePictureResponse {
    enum Status {
        OK,
        FAIL
    }
    static SetProfilePictureResponse success = new SetProfilePictureResponse(Status.OK);

    public final Status status;
    public final Optional<String> error;

    SetProfilePictureResponse(Status status) {
        this.status = Status.OK;
        this.error = Optional.empty();
    }
    SetProfilePictureResponse(Exception e) {
        this.status = Status.FAIL;
        this.error = Optional.of(e.getMessage());
    }

    public static SetProfilePictureResponse Success() {
        return success;
    }
    public static SetProfilePictureResponse Fail(Exception e) {
        return new SetProfilePictureResponse(e);
    }
}
