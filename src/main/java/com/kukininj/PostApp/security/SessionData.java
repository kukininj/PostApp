package com.kukininj.PostApp.security;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serializable;
import java.util.UUID;

@Component
@SessionScope
public class SessionData implements Serializable {
    public UUID userID = null;

    public boolean loggedIn() {
        return this.userID != null;
    }
    public void setUser(UUID userID) {
        this.userID = userID;
    }

    public UUID getUserID() {
        return userID;
    }

    public SessionData() {
        System.out.println("session constructor");
    }
}
