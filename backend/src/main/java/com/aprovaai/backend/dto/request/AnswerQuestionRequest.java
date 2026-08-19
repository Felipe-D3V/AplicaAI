package com.aprovaai.backend.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class AnswerQuestionRequest {

    @NotNull(message = "A alternativa escolhida é obrigatório.")
    private Long alternativeId;
    
}
