package com.aprovaai.backend.service;

import com.aprovaai.backend.dto.response.StatisticsResponse;
import com.aprovaai.backend.entity.User;
import com.aprovaai.backend.repository.QuestionAttemptRepository;
import com.aprovaai.backend.repository.UserRepository;
import com.aprovaai.backend.dto.response.SubjectStatisticsResponse;
import com.aprovaai.backend.dto.response.TopicStatisticsResponse;
import com.aprovaai.backend.entity.QuestionAttempt;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.Authentication;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class StatisticsService {

    private final QuestionAttemptRepository questionAttemptRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
public StatisticsResponse getStatistics(
        Authentication authentication
) {

    User user = userRepository.findByEmail(
            authentication.getName()
    ).orElseThrow(() ->
            new RuntimeException("Usuário não encontrado.")
    );

    long totalAnswered =
            questionAttemptRepository.countByUser(user);

    long correctAnswers =
            questionAttemptRepository
                    .countByUserAndCorrectTrue(user);

    long wrongAnswers =
            questionAttemptRepository
                    .countByUserAndCorrectFalse(user);

    double accuracy = totalAnswered == 0
            ? 0.0
            : ((double) correctAnswers / totalAnswered) * 100;

    List<QuestionAttempt> attempts =
            questionAttemptRepository
                    .findByUserOrderByAnsweredAtDesc(user);

    Map<String, List<QuestionAttempt>> attemptsBySubject =
            attempts.stream()
                    .collect(Collectors.groupingBy(
                            attempt -> attempt
                                    .getQuestion()
                                    .getSubject()
                    ));

    List<SubjectStatisticsResponse> subjects =
            attemptsBySubject.entrySet()
                    .stream()
                    .map(entry -> {

                        String subject = entry.getKey();

                        List<QuestionAttempt> subjectAttempts =
                                entry.getValue();

                        Map<String, List<QuestionAttempt>> attemptsByTopic =
                                subjectAttempts.stream()
                                        .collect(Collectors.groupingBy(
                                                attempt -> attempt
                                                        .getQuestion()
                                                        .getTopic()
                                        ));

                        List<TopicStatisticsResponse> topicStatistics =
                            attemptsByTopic.entrySet()
                                .stream()
                                .map(topicEntry -> {

                                    String topic = topicEntry.getKey();

                                    List<QuestionAttempt> topicAttempts =
                                        topicEntry.getValue();

                                    long topicTotal =
                                        topicAttempts.size();

                                    long topicCorrect =
                                        topicAttempts.stream()
                                            .filter(QuestionAttempt::getCorrect)
                                            .count();

                                    long topicWrong =
                                        topicTotal - topicCorrect;

                                    double topicAccuracy =
                                        topicTotal == 0
                                            ? 0.0
                                            : ((double) topicCorrect
                                                / topicTotal) * 100;

                                    return TopicStatisticsResponse.builder()
                                        .topic(topic)
                                        .totalAnswered(topicTotal)
                                        .correctAnswers(topicCorrect)
                                        .wrongAnswers(topicWrong)
                                        .accuracy(topicAccuracy)
                                        .build();
                                })
                                .toList();

                        long subjectTotal =
                                subjectAttempts.size();

                        long subjectCorrect =
                                subjectAttempts.stream()
                                        .filter(QuestionAttempt::getCorrect)
                                        .count();

                        long subjectWrong =
                                subjectTotal - subjectCorrect;

                        double subjectAccuracy =
                                subjectTotal == 0
                                        ? 0.0
                                        : ((double) subjectCorrect
                                            / subjectTotal) * 100;

                        return SubjectStatisticsResponse.builder()
                                .subject(subject)
                                .totalAnswered(subjectTotal)
                                .correctAnswers(subjectCorrect)
                                .wrongAnswers(subjectWrong)
                                .accuracy(subjectAccuracy)
                                .topicStatistics(topicStatistics)
                                .build();
                    })
                    .toList();

    return StatisticsResponse.builder()
            .totalAnswered(totalAnswered)
            .correctAnswers(correctAnswers)
            .wrongAnswers(wrongAnswers)
            .accuracy(accuracy)
            .subjectStatistics(subjects)
            .build();
    }
}
