package com.aprovaai.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
@JsonPropertyOrder({
        "topic",
        "totalAnswered",
        "correctAnswers",
        "wrongAnswers",
        "accuracy"
})
public class TopicStatisticsResponse {
    
    private String topic;

    private long totalAnswered;

    private long correctAnswers;

    private long wrongAnswers;

    private double accuracy;
}
