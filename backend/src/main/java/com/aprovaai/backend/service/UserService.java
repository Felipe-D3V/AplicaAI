package com.aprovaai.backend.service;

import com.aprovaai.backend.dto.request.RegisterRequest;
import com.aprovaai.backend.dto.response.ProgressResponse;
import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.entity.QuestionAttempt;
import com.aprovaai.backend.entity.User;
import com.aprovaai.backend.exception.EmailAlreadyExistsException;
import com.aprovaai.backend.exception.ResourceNotFoundException;
import com.aprovaai.backend.repository.UserRepository;
import com.aprovaai.backend.dto.request.UpdateUserRequest;
import com.aprovaai.backend.repository.QuestionAttemptRepository;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.Authentication;
import com.aprovaai.backend.mapper.UserMapper;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final QuestionAttemptRepository questionAttemptRepository;

    
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

    @Transactional
    public UserResponse updateMe(
            UpdateUserRequest request,
            User user
    ) {

        user.setName(request.getName());
        user.setAvatar(request.getAvatar());
        user.setTargetScore(request.getTargetScore());

        User updatedUser = userRepository.save(user);

        return UserMapper.toResponse(updatedUser);
    }

    @Transactional(readOnly = true)
    public ProgressResponse getProgress(User user) {

    List<QuestionAttempt> attempts =
            questionAttemptRepository.findByUser(user);

    long totalAnswered = attempts.size();

    long correctAnswers = attempts.stream()
            .filter(attempt -> Boolean.TRUE.equals(attempt.getCorrect()))
            .count();

    long wrongAnswers = totalAnswered - correctAnswers;

    double accuracy = totalAnswered == 0
            ? 0.0
            : (double) correctAnswers / totalAnswered * 100;

    long subjectsStudied = attempts.stream()
            .map(attempt -> attempt.getQuestion().getSubject())
            .distinct()
            .count();

    return ProgressResponse.builder()
            .totalAnswered(totalAnswered)
            .correctAnswers(correctAnswers)
            .wrongAnswers(wrongAnswers)
            .accuracy(accuracy)
            .subjectsStudied(subjectsStudied)
            .build();
}

} 