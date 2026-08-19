package com.aprovaai.backend.controller;

import com.aprovaai.backend.dto.request.CreateQuestionRequest;
import com.aprovaai.backend.dto.response.QuestionResponse;
import com.aprovaai.backend.service.QuestionService;
import com.aprovaai.backend.dto.request.AnswerQuestionRequest;
import com.aprovaai.backend.dto.response.AnswerQuestionResponse;
import com.aprovaai.backend.dto.response.QuestionAttemptResponse;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor

public class QuestionController {

    private final QuestionService questionService;

    @PostMapping
    public ResponseEntity<QuestionResponse> create(
            @Valid @RequestBody CreateQuestionRequest request) {

        QuestionResponse response = questionService.create(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    @GetMapping
    public ResponseEntity<List<QuestionResponse>> findAll() {

    return ResponseEntity.ok(
            questionService.findAll()
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
            questionService.answer(
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
            questionService.getHistory(authentication)
    );
    }
    
}
