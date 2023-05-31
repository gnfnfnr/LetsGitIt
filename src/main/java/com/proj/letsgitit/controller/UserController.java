package com.proj.letsgitit.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.proj.letsgitit.config.jwt.LoginResponse;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
@RequiredArgsConstructor
public class UserController {

    @Value("${githubApiUrl}")
    private String githubApiUrl;

    @Value("${githubRedirectUrl}")
    private String githubRedirectUrl;

    @Value("${spring.security.oauth2.client.registration.github.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.github.client-secret}")
    private String clientSecret;

    private String TOKEN_REQUEST_URL = "https://github.com/login/oauth/access_token";

    private String PROFILE_REQUEST_URL = "https://api.github.com/user";

    private final UserService userService;

    @GetMapping("/login/getGithubUrl")
    public @ResponseBody String getGithubUrl(HttpServletRequest request) {
        String reqUrl = githubApiUrl + "?client_id=" + clientId;
        return reqUrl;
    }

    @GetMapping("/login/oauth2")
    public ResponseEntity login(String code) throws IOException, JsonProcessingException {
        LoginResponse loginResponse = userService.login(code);
        //System.out.println("access_token: " + loginResponse.getAccessToken());
        String jwtToken = loginResponse.getAccessToken();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer "+jwtToken);
        return ResponseEntity.ok().headers(headers).body("login-success");
    }
    //jwt 토큰으로 유저 정보 요청하기
    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) {
        User user = userService.getUser
    }
}