package com.proj.letsgitit.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proj.letsgitit.config.jwt.JwtProperties;
import com.proj.letsgitit.entity.GithubProfile;
import com.proj.letsgitit.entity.OAuthToken;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Service
@RequiredArgsConstructor

public class UserService {
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
    UserRepository userRepository;

    public OAuthToken getOauthToken(String code) throws JsonProcessingException {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("code", code);
        params.add("redirect_uri", githubRedirectUrl);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", "application/json");
        HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(TOKEN_REQUEST_URL,
                HttpMethod.POST,
                httpEntity,
                String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(response.getBody(), OAuthToken.class);
    }

    public GithubProfile getGithubProfile(String token) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "token " + token);

        ResponseEntity<String> response = restTemplate.exchange(
                PROFILE_REQUEST_URL,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        GithubProfile githubProfile = null;
        try {
            githubProfile = objectMapper.readValue(response.getBody(), GithubProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return githubProfile;
    }

    public String saveUserAndGetToken(String token) {

        GithubProfile githubProfile = getGithubProfile(token);

        User findUser = userRepository.findByLogin(githubProfile.getLogin());
        if (findUser == null) { //update 일단 생략함....
            findUser = User.builder()
                    .login(githubProfile.getLogin())
                    .name(githubProfile.getName())
                    .gitId(githubProfile.getGitId())
                    .htmlUrl(githubProfile.getHtml_url())
                    .email(githubProfile.getEmail())
                    .build();
            userRepository.save(findUser);
        }
        return createToken(findUser);
    }

    public String createToken(User user) {
        String jwtToken = JWT.create()
                .withSubject(user.getEmail()) //String 타입이 필요한데 id는 long타입이라 email로
                .withExpiresAt(new Date(System.currentTimeMillis()+ JwtProperties.EXPIRATION_TIME))
                .withClaim("id", user.getGitId())
                .withClaim("nickname", user.getName())
                .sign(Algorithm.HMAC512(JwtProperties.SECRET));

        return jwtToken;
    }
    public User getUser(HttpServletRequest request) {
        Long id = (Long) request.getAttribute("id");

        User user = userRepository.findByGitId(id);
        return user;
    }
}