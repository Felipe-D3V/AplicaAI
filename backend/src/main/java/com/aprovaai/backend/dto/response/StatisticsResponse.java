package com.aprovaai.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Builder;
import lombok.Data;

import java.util.List;


@Data
@Builder
@JsonPropertyOrder ({
        "totalAnswered",
        "correctAnswers",
        "wrongAnswers",
        "accuracy",
        "subjectStatistics"
})
public class StatisticsResponse {

    private long totalAnswered;

    private long correctAnswers;

    private long wrongAnswers;

    private double accuracy;

    private List<SubjectStatisticsResponse> subjectStatistics;
    
}
