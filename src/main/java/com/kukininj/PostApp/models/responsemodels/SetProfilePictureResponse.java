package com.kukininj.PostApp.models.responsemodels;

import org.springframework.http.ResponseEntity;

public class SetProfilePictureResponse {
    public static SetProfilePictureResponse Success = new SetProfilePictureResponse("success");
    public static SetProfilePictureResponse Fail = new SetProfilePictureResponse("fail");

    public final String status;
    public final int id;

    SetProfilePictureResponse(String status) {
        this.status = status;
        this.id = 10;
    }
}
