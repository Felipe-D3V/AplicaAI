package com.aprovaai.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;
import lombok.Builder;

import java.util.List;

@Data
@Builder
@JsonPropertyOrder({"id", "subject", "topic", "difficulty", "source", "year", "statement", "alternatives"})
public class QuestionResponse {

    private long id;

    private String statement;

    private String subject;

    private String topic;

    private String difficulty;

    private String source;

    private Integer year;

    private List<AlternativeResponse> alternatives;
}
