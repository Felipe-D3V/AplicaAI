package com.aprovaai.backend.dto.request;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Min;

@Data
public class UpdateUserRequest {

    @NotBlank(message = "O nome é obrigatório.")
    private String name;

    private String avatar;

    @Min(value = 0, message = "A meta de pontuação não pode ser negativa.")
    private Integer targetScore;
    
}
