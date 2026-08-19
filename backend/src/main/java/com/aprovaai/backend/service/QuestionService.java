package com.aprovaai.backend.service;

import com.aprovaai.backend.dto.request.CreateAlternativeRequest;
import com.aprovaai.backend.dto.request.CreateQuestionRequest;
import com.aprovaai.backend.dto.response.QuestionResponse;
import com.aprovaai.backend.entity.Alternative;
import com.aprovaai.backend.entity.Question;
import com.aprovaai.backend.entity.QuestionAttempt;
import com.aprovaai.backend.mapper.QuestionMapper;
import com.aprovaai.backend.repository.QuestionRepository;
import com.aprovaai.backend.dto.response.QuestionAttemptResponse;


import com.aprovaai.backend.dto.request.AnswerQuestionRequest;
import com.aprovaai.backend.dto.response.AnswerQuestionResponse;
import com.aprovaai.backend.repository.QuestionAttemptRepository;
import com.aprovaai.backend.repository.UserRepository;
import com.aprovaai.backend.entity.User;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionAttemptRepository questionAttemptRepository;
    private final UserRepository userRepository;

    @Transactional
    public QuestionResponse create(CreateQuestionRequest request) {

        Question question = Question.builder()
                .statement(request.getStatement())
                .subject(request.getSubject())
                .topic(request.getTopic())
                .difficulty(request.getDifficulty())
                .source(request.getSource())
                .year(request.getYear())
                .build();

        for (CreateAlternativeRequest alternativeRequest :
                request.getAlternatives()) {

            Alternative alternative = Alternative.builder()
                    .text(alternativeRequest.getText())
                    .correct(alternativeRequest.getCorrect())
                    .question(question)
                    .build();

            question.getAlternatives().add(alternative);
        }

        Question savedQuestion =
                questionRepository.save(question);

        return QuestionMapper.toResponse(savedQuestion);
    }

    @Transactional(readOnly = true)
    public List<QuestionResponse> findAll() {

        return questionRepository.findAll()
                .stream()
                .map(QuestionMapper::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public QuestionResponse findById(Long id) {

        Question question = questionRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Questão não encontrada.")
                );

        return QuestionMapper.toResponse(question);
    }
    @Transactional
public AnswerQuestionResponse answer(
        Long questionId,
        AnswerQuestionRequest request,
        Authentication authentication
) {

    Question question = questionRepository.findById(questionId)
            .orElseThrow(() ->
                    new RuntimeException("Questão não encontrada.")
            );

    Alternative selectedAlternative =
            question.getAlternatives()
                    .stream()
                    .filter(alternative ->
                            alternative.getId()
                                    .equals(request.getAlternativeId())
                    )
                    .findFirst()
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Alternativa não pertence à questão."
                            )
                    );

    User user = userRepository.findByEmail(
            authentication.getName()
    ).orElseThrow(() ->
            new RuntimeException("Usuário não encontrado.")
    );

    boolean correct = Boolean.TRUE.equals(
            selectedAlternative.getCorrect()
    );

    QuestionAttempt attempt = QuestionAttempt.builder()
            .user(user)
            .question(question)
            .selectedAlternative(selectedAlternative)
            .correct(correct)
            .build();

    questionAttemptRepository.save(attempt);

    return AnswerQuestionResponse.builder()
            .questionId(question.getId())
            .selectedAlternativeId(selectedAlternative.getId())
            .correct(correct)
            .build();
}
    @Transactional(readOnly = true)
    public List<QuestionAttemptResponse> getHistory(
        Authentication authentication
    ) {

    User user = userRepository.findByEmail(
            authentication.getName()
    ).orElseThrow(() ->
            new RuntimeException("Usuário não encontrado.")
    );

        return questionAttemptRepository
            .findByUserOrderByAnsweredAtDesc(user)
            .stream()
            .map(attempt ->
                    QuestionAttemptResponse.builder()
                            .id(attempt.getId())
                            .questionId(
                                    attempt.getQuestion().getId()
                            )
                            .selectedAlternativeId(
                                    attempt.getSelectedAlternative().getId()
                            )
                            .correct(attempt.getCorrect())
                            .answeredAt(attempt.getAnsweredAt())
                            .build()
            )
            .toList();
    }
}