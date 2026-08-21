package com.aprovaai.backend.repository;

import com.aprovaai.backend.entity.QuestionAttempt;
import com.aprovaai.backend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionAttemptRepository
        extends JpaRepository<QuestionAttempt, Long> {

    List<QuestionAttempt> findByUserOrderByAnsweredAtDesc(User user);

    long countByUser(User user);
    
    long countByUserAndCorrectTrue(User user);

    long countByUserAndCorrectFalse(User user);

    List<QuestionAttempt> findByUserAndCorrectFalseOrderByAnsweredAtDesc(User user);
}