package com.kukininj.PostApp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serializable;
import java.util.Optional;

@Component
@SessionScope
public class SessionData implements Serializable {
    public Long userID = null;

    public boolean loggedIn() {
        return this.userID != null;
    }
    public void setUser(Long userID) {
        this.userID = userID;
    }

    public Long getUserID() {
        return userID;
    }

    public SessionData() {
        System.out.println("session constructor");
    }
}
