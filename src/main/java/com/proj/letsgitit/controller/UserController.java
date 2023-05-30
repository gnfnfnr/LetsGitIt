package com.proj.letsgitit.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.proj.letsgitit.config.jwt.JwtProperties;
import com.proj.letsgitit.entity.OAuthToken;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
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

    @Autowired
    UserService userService;

    @GetMapping("/login/getGithubUrl")
    public @ResponseBody String getGithubUrl(HttpServletRequest request) {
        String reqUrl = githubApiUrl + "?client_id=" + clientId;
        return reqUrl;
    }

//    @GetMapping("/login/oauth2")
//    public ResponseEntity getCode(String code) throws IOException, JsonProcessingException {
//        OAuthToken oAuthToken = userService.getOauthToken(code);
//
//        GithubProfile githubProfile = userService.getGithubProfile(oAuthToken);
//        User newUser = userService.saveUserAndGetToken(githubProfile);
//        return ResponseEntity.ok(newUser);
//    }

    @GetMapping("/login/oauth2")
    public ResponseEntity getCode(String code) throws IOException, JsonProcessingException {
        //넘어온 인가 코드를 통해 access token 발급
        OAuthToken oAuthToken = userService.getOauthToken(code);

        //발급 받은 accessToken 으로 회원 정보 DB 저장 후 jwt 를 생성
        String jwtToken = userService.saveUserAndGetToken(oAuthToken.getAccessToken());

        //응답 헤더의 Authorization 이라는 항목에 jwt를 넣어준다
        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        System.out.println("code : " + code);
        System.out.println("oAuthToken : " + oAuthToken);
        System.out.println("jwtToken : " + jwtToken);
        System.out.println("headers : " + headers);
        return ResponseEntity.ok().headers(headers).body(null);
    }
    // jwt 토큰으로 유저정보 요청하기
    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(HttpServletRequest request){

        User user = userService.getUser(request);

        System.out.println("user" + user);
        return ResponseEntity.ok().body(user);
    }

}