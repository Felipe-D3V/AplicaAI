package com.aprovaai.backend.mapper;

import com.aprovaai.backend.dto.response.AlternativeResponse;
import com.aprovaai.backend.dto.response.QuestionResponse;
import com.aprovaai.backend.entity.Alternative;
import com.aprovaai.backend.entity.Question;

import java.util.List;

public class QuestionMapper {

    private QuestionMapper() {
    }

    public static QuestionResponse toResponse(Question question) {

        List<AlternativeResponse> alternatives =
                question.getAlternatives()
                        .stream()
                        .map(QuestionMapper::toAlternativeResponse)
                        .toList();

        return QuestionResponse.builder()
                .id(question.getId())
                .statement(question.getStatement())
                .subject(question.getSubject())
                .topic(question.getTopic())
                .difficulty(question.getDifficulty())
                .source(question.getSource())
                .year(question.getYear())
                .alternatives(alternatives)
                .build();
    }

    private static AlternativeResponse toAlternativeResponse(
            Alternative alternative
    ) {

        return AlternativeResponse.builder()
                .id(alternative.getId())
                .text(alternative.getText())
                .build();
    }
}