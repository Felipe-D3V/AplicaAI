package com.aprovaai.backend.dto.response;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class AnswerQuestionResponse {

    private Long questionId;

    private Long selectedAlternativeId;

    private Boolean correct;
    
}
