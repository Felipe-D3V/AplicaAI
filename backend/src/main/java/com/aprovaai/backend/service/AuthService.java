package com.aprovaai.backend.service;

import com.aprovaai.backend.dto.request.LoginRequest;
import com.aprovaai.backend.dto.request.RegisterRequest;
import com.aprovaai.backend.dto.response.AuthResponse;
import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.entity.User;
import com.aprovaai.backend.exception.EmailAlreadyExistsException;
import com.aprovaai.backend.mapper.UserMapper;
import com.aprovaai.backend.repository.UserRepository;
import com.aprovaai.backend.security.JwtService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.aprovaai.backend.security.JwtService;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserResponse register(RegisterRequest request){

    if(userRepository.existsByEmail(request.getEmail())){
        throw new EmailAlreadyExistsException("Email já cadastrado.");
    }

    User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .build();

    User savedUser = userRepository.save(user);

    return UserMapper.toResponse(savedUser);

}

public AuthResponse login(LoginRequest request){

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() ->
                    new RuntimeException("Email ou senha inválidos.")
            );

    if(!passwordEncoder.matches(
        request.getPassword(),
        user.getPassword())){
        throw new RuntimeException("Email ou senha inválidos.");
    }

    return AuthResponse.builder()
            .token(jwtService.generateToken(user.getEmail()))
            .user(UserMapper.toResponse(user))
            .build();

}

    

}
