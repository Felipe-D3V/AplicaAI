package com.aprovaai.backend.dto.response;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class AlternativeResponse {
    
    private long id;

    private String text;

}
