package com.aprovaai.backend.dto.request;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.Valid;

import java.util.List;

@Data
public class CreateQuestionRequest {

    @NotBlank(message = "O enunciado é obrigatório.")
    private String statement;

    @NotEmpty(message = "A disciplina é obrigatória.")
    private String subject;

    @NotBlank(message = "O assunto é obrigatório.")
    private String topic;

    @NotBlank(message = "A dificuldade é obrigatória.")
    private String difficulty;

    private String source;

    private Integer year;

    @Valid
    @NotEmpty(message = "A Questão deve possuir pelo menos uma alternativa.")
    private List<CreateAlternativeRequest> alternatives;
}