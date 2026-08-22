package com.aprovaai.backend.dto.response;

import lombok.Data;
import lombok.Builder;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@Data
@Builder
@JsonPropertyOrder({ "totalAnswered", "correctAnswers", "wrongAnswers", "accuracy", "subjectsStudied" })
public class ProgressResponse {

    private long totalAnswered;

    private long correctAnswers;

    private long wrongAnswers;

    private double accuracy;

    private long subjectsStudied;


    
}
