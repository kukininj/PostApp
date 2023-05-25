package com.kukininj.PostApp.security;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.util.Optional;

@Component
@SessionScope
public class Session {
    public Optional<Long> userID;

    public Session() {
        userID = Optional.empty();
    }
}
