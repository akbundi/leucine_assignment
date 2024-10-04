package com.example.securityconfig.securityconfig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
@SpringBootApplication
@Configuration
@EnableWebSecurity
public class SecurityconfigApplication {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable) // Updated CSRF configuration
            .authorizeHttpRequests(authorize -> authorize // Updated method
                .requestMatchers("/api/auth/**").permitAll()  // Allow access to authentication endpoints
                .requestMatchers("/api/student/**").hasRole("STUDENT")  // Only students can access student endpoints
                .requestMatchers("/api/faculty/**").hasRole("FACULTY_MEMBER")  // Only faculty members can access faculty endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMINISTRATOR")  // Only admins can access admin endpoints
                .anyRequest().authenticated()  // Any other request must be authenticated
            )
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Disable session management, use JWT
            );
        return http.build();
    }

    public static void main(String[] args) {
        SpringApplication.run(SecurityconfigApplication.class, args);
    }

}
