package com.aprovaai.backend.controller;

import com.aprovaai.backend.dto.request.UpdateUserRequest;
import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.entity.User;
import com.aprovaai.backend.mapper.UserMapper;
import com.aprovaai.backend.service.UserService;
import com.aprovaai.backend.dto.response.ProgressResponse;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public UserResponse getCurrentUser(
            @AuthenticationPrincipal User user
    ) {

        return UserMapper.toResponse(user);
    }

    @PutMapping("/me")
    public ResponseEntity<UserResponse> updateMe(
            @Valid @RequestBody UpdateUserRequest request,
            @AuthenticationPrincipal User user
    ) {

        return ResponseEntity.ok(
                userService.updateMe(request, user)
        );
    }

    @GetMapping("/me/progress")
    public ResponseEntity<ProgressResponse> getProgress(
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(userService.getProgress(user));
    }
    
}