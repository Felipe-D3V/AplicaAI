package com.aprovaai.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;
import lombok.Builder;

import java.util.List;


@Data
@Builder
@JsonPropertyOrder({
        "subject",
        "totalAnswered",
        "correctAnswers",
        "wrongAnswers",
        "accuracy",
        "topicStatistics"
})
public class SubjectStatisticsResponse {

    private String subject;

    private long totalAnswered;

    private long correctAnswers;

    private long wrongAnswers;

    private double accuracy;

    private List<TopicStatisticsResponse> topicStatistics;
    
}
