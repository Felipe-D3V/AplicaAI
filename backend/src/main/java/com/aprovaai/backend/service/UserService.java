package com.aprovaai.backend.service;

import com.aprovaai.backend.dto.request.RegisterRequest;
import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.entity.User;
import com.aprovaai.backend.exception.EmailAlreadyExistsException;
import com.aprovaai.backend.exception.ResourceNotFoundException;
import com.aprovaai.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.aprovaai.backend.mapper.UserMapper;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    
    public UserResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email já cadastrado.");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

        User savedUser = userRepository.save(user);

        return UserMapper.toResponse(savedUser);
    }

    
    public User findByEmail(String email) {

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Usuário não encontrado.")
                );
    }

    
    public UserResponse findById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Usuário não encontrado.")
                );

        return UserMapper.toResponse(user);
    }

}