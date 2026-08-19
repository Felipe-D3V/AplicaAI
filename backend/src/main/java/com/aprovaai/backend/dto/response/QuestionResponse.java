package com.aprovaai.backend.dto.response;

import lombok.Data;
import lombok.Builder;

import java.util.List;

@Data
@Builder
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
