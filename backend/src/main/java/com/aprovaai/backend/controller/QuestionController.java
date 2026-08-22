package com.aprovaai.backend.controller;

import com.aprovaai.backend.dto.request.AnswerQuestionRequest;
import com.aprovaai.backend.dto.request.CreateQuestionRequest;
import com.aprovaai.backend.dto.response.AnswerQuestionResponse;
import com.aprovaai.backend.dto.response.QuestionAttemptResponse;
import com.aprovaai.backend.dto.response.QuestionPageResponse;
import com.aprovaai.backend.dto.response.QuestionResponse;
import com.aprovaai.backend.service.QuestionAttemptService;
import com.aprovaai.backend.service.QuestionService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionAttemptService questionAttemptService;

    @PostMapping
    public ResponseEntity<QuestionResponse> create(
            @Valid @RequestBody CreateQuestionRequest request) {

        QuestionResponse response =
                questionService.create(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<QuestionPageResponse> find(
            @RequestParam(required = false) String subject,
            @RequestParam(required = false) String topic,
            @RequestParam(required = false) String difficulty,
            @RequestParam(required = false) String search,
            Pageable pageable
    ) {

        return ResponseEntity.ok(
                questionService.find(
                        subject,
                        topic,
                        difficulty,
                        search,
                        pageable
                )
        );
    }

    @GetMapping("/wrong")
    public ResponseEntity<List<QuestionResponse>> getWrongQuestions(
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                questionAttemptService.getWrongQuestions(authentication)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionResponse> findById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                questionService.findById(id)
        );
    }

    @PostMapping("/{id}/answer")
    public ResponseEntity<AnswerQuestionResponse> answerQuestion(
            @PathVariable Long id,
            @Valid @RequestBody AnswerQuestionRequest request,
            Authentication authentication
    ) {

        AnswerQuestionResponse response =
                questionAttemptService.answer(
                        id,
                        request,
                        authentication
                );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/history")
    public ResponseEntity<List<QuestionAttemptResponse>> getHistory(
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                questionAttemptService.getHistory(authentication)
        );
    }
}