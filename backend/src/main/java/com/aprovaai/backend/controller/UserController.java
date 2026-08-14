package com.aprovaai.backend.controller;

import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.entity.User;
import com.aprovaai.backend.mapper.UserMapper;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/me")
    public UserResponse getCurrentUser(
            @AuthenticationPrincipal User user
    ) {

        return UserMapper.toResponse(user);

    }

}