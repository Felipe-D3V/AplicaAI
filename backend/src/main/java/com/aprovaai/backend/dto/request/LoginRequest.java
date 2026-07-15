package com.aprovaai.backend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {

@Email(message = "Email inválido.")
@NotBlank(message = "O email é obrigatório.")
private String email;

@NotBlank(message = "A senha é obrigatória.")
private String password;

}