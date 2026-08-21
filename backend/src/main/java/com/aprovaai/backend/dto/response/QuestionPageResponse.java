package com.aprovaai.backend.dto.response;


import lombok.Data;
import lombok.Builder;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

@Data
@Builder
@JsonPropertyOrder({"questions", "pageSize", "totalElements", "totalPages", "currentPage"})
public class QuestionPageResponse {

    private List<QuestionResponse> questions;

    private int pageSize;

    private long totalElements;

    private int totalPages;

    private int currentPage;
    
}
