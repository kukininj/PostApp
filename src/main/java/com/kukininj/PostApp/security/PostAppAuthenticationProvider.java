package com.kukininj.PostApp.security;

import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class PostAppAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    UserRepository userRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();

        // 😞
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) { // 😩
            return null;
        }

        System.out.println(user.email);

        if (BCrypt.checkpw(password, user.passwordHash)) {
            return new UsernamePasswordAuthenticationToken(email, password, new ArrayList<>(){});
        } else {
            return null;
        }

    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
