package com.aprovaai.backend.specification;

import com.aprovaai.backend.entity.Question;

import org.springframework.data.jpa.domain.Specification;

public class QuestionSpecification {

    public static Specification<Question> hasSubject(String subject) {

        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(
                        root.get("subject"),
                        subject
                );
    }

    public static Specification<Question> hasTopic(String topic) {

        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(
                        root.get("topic"),
                        topic
                );
    }

    public static Specification<Question> hasDifficulty(String difficulty) {

        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(
                        root.get("difficulty"),
                        difficulty
                );
    }

    public static Specification<Question> statementContains(String search) {

        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("statement")),
                        "%" + search.toLowerCase() + "%"
                );
    }
}