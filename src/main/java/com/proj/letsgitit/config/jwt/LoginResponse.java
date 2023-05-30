package com.proj.letsgitit.config.jwt;

import com.proj.letsgitit.entity.Role;
import lombok.Builder;
import lombok.Getter;

@Getter
public class LoginResponse {
    private Long id;
    private String login;
    private String name;
    private String email;
    private String htmlUrl;
    private Role role;
    private String tokenType;
    private String accessToken;
    private String refreshToken;

    @Builder
    public LoginResponse(Long id, String login, String name, String email, String htmlUrl, Role role, String tokenType, String accessToken, String refreshToken) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.email = email;
        this.htmlUrl = htmlUrl;
        this.role = role;
        this.tokenType = tokenType;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
