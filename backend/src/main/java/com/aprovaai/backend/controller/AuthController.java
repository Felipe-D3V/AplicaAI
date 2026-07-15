package com.aprovaai.backend.controller;

import com.aprovaai.backend.dto.request.LoginRequest;
import com.aprovaai.backend.dto.request.RegisterRequest;
import com.aprovaai.backend.dto.response.ApiResponse;
import com.aprovaai.backend.dto.response.AuthResponse;
import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
public ApiResponse<UserResponse> register(
        @Valid @RequestBody RegisterRequest request){

    UserResponse response = authService.register(request);

    return ApiResponse.<UserResponse>builder()
            .success(true)
            .message("Usuário cadastrado com sucesso.")
            .data(response)
            .build();

}

@PostMapping("/login")
public ApiResponse<AuthResponse> login(
        @Valid @RequestBody LoginRequest request){

    AuthResponse response = authService.login(request);

    return ApiResponse.<AuthResponse>builder()
            .success(true)
            .message("Login realizado com sucesso.")
            .data(response)
            .build();

}

}