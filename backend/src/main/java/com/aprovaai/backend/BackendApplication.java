package com.aprovaai.backend;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

	@Bean
CommandLineRunner testPasswordEncoder(
        PasswordEncoder passwordEncoder
) {
    return args -> {

        String senha = "AprovaAI123";

        String hash = passwordEncoder.encode(senha);

        System.out.println("HASH: " + hash);
        System.out.println(
            "TESTE: " +
            passwordEncoder.matches(senha, hash)
        );

    };
}

    

}