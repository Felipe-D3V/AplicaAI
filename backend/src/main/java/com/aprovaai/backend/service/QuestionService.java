package com.aprovaai.backend.service;

import com.aprovaai.backend.dto.request.CreateAlternativeRequest;
import com.aprovaai.backend.dto.request.CreateQuestionRequest;
import com.aprovaai.backend.dto.response.QuestionPageResponse;
import com.aprovaai.backend.dto.response.QuestionResponse;
import com.aprovaai.backend.entity.Alternative;
import com.aprovaai.backend.entity.Question;
import com.aprovaai.backend.mapper.QuestionMapper;
import com.aprovaai.backend.repository.QuestionRepository;
import com.aprovaai.backend.specification.QuestionSpecification;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    @Transactional
    public QuestionResponse create(CreateQuestionRequest request) {

        Question question = Question.builder()
                .statement(request.getStatement())
                .subject(request.getSubject())
                .topic(request.getTopic())
                .difficulty(request.getDifficulty())
                .source(request.getSource())
                .year(request.getYear())
                .build();

        for (CreateAlternativeRequest alternativeRequest :
                request.getAlternatives()) {

            Alternative alternative = Alternative.builder()
                    .text(alternativeRequest.getText())
                    .correct(alternativeRequest.getCorrect())
                    .question(question)
                    .build();

            question.getAlternatives().add(alternative);
        }

        Question savedQuestion =
                questionRepository.save(question);

        return QuestionMapper.toResponse(savedQuestion);
    }

    @Transactional(readOnly = true)
    public QuestionResponse findById(Long id) {

        Question question = questionRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Questão não encontrada.")
                );

        return QuestionMapper.toResponse(question);
    }

    @Transactional(readOnly = true)
    public QuestionPageResponse find(
            String subject,
            String topic,
            String difficulty,
            String search,
            Pageable pageable
    ) {

        Specification<Question> specification =
                Specification.unrestricted();

        if (subject != null && !subject.isBlank()) {
            specification = specification.and(
                    QuestionSpecification.hasSubject(subject)
            );
        }

        if (topic != null && !topic.isBlank()) {
            specification = specification.and(
                    QuestionSpecification.hasTopic(topic)
            );
        }

        if (difficulty != null && !difficulty.isBlank()) {
            specification = specification.and(
                    QuestionSpecification.hasDifficulty(difficulty)
            );
        }

        if (search != null && !search.isBlank()) {
            specification = specification.and(
                    QuestionSpecification.statementContains(search)
            );
        }

        Page<Question> page =
                questionRepository.findAll(
                        specification,
                        pageable
                );

        List<QuestionResponse> questions = page
                .getContent()
                .stream()
                .map(QuestionMapper::toResponse)
                .toList();

        return QuestionPageResponse.builder()
                .questions(questions)
                .currentPage(page.getNumber())
                .totalPages(page.getTotalPages())
                .totalElements(page.getTotalElements())
                .pageSize(page.getSize())
                .build();
    }
}