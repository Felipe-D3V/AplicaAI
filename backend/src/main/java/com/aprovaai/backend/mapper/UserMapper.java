package com.aprovaai.backend.mapper;

import com.aprovaai.backend.dto.response.UserResponse;
import com.aprovaai.backend.entity.User;

public class UserMapper {

    private UserMapper() {
    }

    public static UserResponse toResponse(User user) {

        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .avatar(user.getAvatar())
                .targetScore(user.getTargetScore())
                .level(user.getLevel())
                .build();

    }

}