package com.aprovaai.backend.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class QuestionAttemptResponse {

    private Long id;

    private Long questionId;

    private Long selectedAlternativeId;

    private Boolean correct;

    private LocalDateTime answeredAt;
}