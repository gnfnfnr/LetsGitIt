package com.proj.letsgitit.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.proj.letsgitit.config.jwt.JwtProperties;
import com.proj.letsgitit.entity.OAuthToken;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity login(@RequestParam(value = "code", required = false) String code) throws IOException, JsonProcessingException {
        OAuthToken oAuthToken = userService.getOauthToken(code);

        //발급 받은 accessToken으로 회원 정보 DB 저장
        String jwtToken = userService.saveUserAndGetToken(oAuthToken.getAccessToken());
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);

        //test 용
        System.out.println("code : " + code);
        System.out.println("oauthToken : " + oAuthToken);
        System.out.println("jwtToken : " + jwtToken);
        System.out.println("headers : " + headers);
        return ResponseEntity.ok().headers(headers).body("login");
    }
    //jwt 토큰으로 유저 정보 요청하기
    @GetMapping("/users")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request) {

        User user = userService.getUser(request);
        System.out.println("user : "+ user);
        //ResponseEntity를 이용해 바디 값에 인증된 사용자 정보를 넘겨준다.
        return ResponseEntity.ok().body(user);
    }
}