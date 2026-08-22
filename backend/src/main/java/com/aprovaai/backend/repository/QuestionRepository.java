package com.aprovaai.backend.repository;

import com.aprovaai.backend.entity.Question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface QuestionRepository
        extends JpaRepository<Question, Long>,
                JpaSpecificationExecutor<Question> {
}