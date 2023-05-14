package com.kukininj.PostApp.models.responsemodels;

public class RegisterResponse {
    public static RegisterResponse Success = new RegisterResponse("success");
    public static RegisterResponse Fail = new RegisterResponse("fail");

    public final String status;
    public final int id;

    RegisterResponse(String status) {
        this.status = status;
        this.id = 10;
    }
}
