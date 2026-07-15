package com.aprovaai.backend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {

@NotBlank(message = "O nome é obrigatório.")
@Size(min = 3, max = 100, message = "O nome deve ter entre 3 e 100 caracteres.")
private String name;

@Email(message = "Email inválido.")
@NotBlank(message = "O email é obrigatório.")
private String email;

@NotBlank(message = "A senha é obrigatória.")
@Size(min = 8, message = "A senha deve possuir no mínimo 8 caracteres.")
private String password;

}