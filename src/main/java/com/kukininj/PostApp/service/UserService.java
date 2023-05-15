package com.kukininj.PostApp.service;

import com.kukininj.PostApp.models.User;
import com.kukininj.PostApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

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

    public List<User> getActiveUsers() {
        return userRepository.findAll();
    }
}
