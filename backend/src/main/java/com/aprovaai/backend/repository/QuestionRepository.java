package com.aprovaai.backend.repository;

import com.aprovaai.backend.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface QuestionRepository extends JpaRepository<Question, Long> {

    Page<Question> findBySubject(String subject, Pageable pageable);

    Page<Question> findByTopic(String topic, Pageable pageable);

    Page<Question> findByDifficulty(String difficulty, Pageable pageable);

    Page<Question> findBySubjectAndTopic(String subject, String topic, Pageable pageable);

    Page<Question> findBySubjectAndDifficulty(String subject, String difficulty, Pageable pageable);

    Page<Question> findByTopicAndDifficulty(String topic, String difficulty, Pageable pageable);

    Page<Question> findBySubjectAndTopicAndDifficulty(String subject, String topic, String difficulty, Pageable pageable);
    
}
