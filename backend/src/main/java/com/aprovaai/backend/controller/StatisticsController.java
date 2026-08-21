package com.aprovaai.backend.controller;

import com.aprovaai.backend.dto.response.StatisticsResponse;
import com.aprovaai.backend.service.StatisticsService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/statistics")
@RequiredArgsConstructor
public class StatisticsController {

    private final StatisticsService statisticsService;

    @GetMapping
    public ResponseEntity<StatisticsResponse> getStatistics(
            Authentication authentication
        ) {
            return ResponseEntity.ok(statisticsService.getStatistics(authentication));
        }
    
}
