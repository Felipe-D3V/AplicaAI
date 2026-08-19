package com.aprovaai.backend.dto.request;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class CreateAlternativeRequest {
    
    @NotBlank(message = "O texto da alternativa é obrigatório.")
    private String text;

    private Boolean correct;
}
