package com.kukininj.PostApp.service;

import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.repository.UserRepository;
import com.kukininj.PostApp.security.SessionData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    SessionData sessionData;

    @Autowired
    private AuthenticationManager authenticationManager;

    public User addUser(
            String email,
            String password,
            String name,
            String surname
    ) {
        Optional<User> existingUser = userRepository.findByEmail(email);

        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already taken.");
        } else {
            User user = new User();
            user.email = email;
            user.name = name;
            user.surname = surname;
            user.passwordHash = BCrypt.hashpw(password, BCrypt.gensalt());
            user.joined = LocalDateTime.now();
            user.favourites = null;

            return userRepository.save(user);
        }
    }

    public Optional<User> authenticate(String email, String password) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email, password);
        try {
            authenticationManager.authenticate(token);

            Optional<User> user = userRepository.findByEmail(email);

            sessionData.setUser(user.get().id);

            return user;
        } catch (Exception e) {
            System.out.println(e.getMessage());

            return Optional.empty();
        }
    }

    public List<User> getActiveUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getActiveUser() {
        if (!sessionData.loggedIn()) {
            return Optional.empty();
        }
        System.out.println("getting user by id");
        return userRepository.findById(
                sessionData.getUserID()
        );
    }
}
