package com.proj.letsgitit.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proj.letsgitit.config.jwt.JwtProperties;
import com.proj.letsgitit.entity.GithubProfile;
import com.proj.letsgitit.entity.OAuthToken;
import com.proj.letsgitit.entity.Role;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
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
    private final UserRepository userRepository;

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
        ResponseEntity<String> response = restTemplate.exchange(
                TOKEN_REQUEST_URL,
                HttpMethod.POST,
                httpEntity,
                String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(response.getBody(), OAuthToken.class);
    }

    public GithubProfile getGithubProfile(String token) throws JsonProcessingException {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token);
        ResponseEntity<String> response = restTemplate.exchange(
                PROFILE_REQUEST_URL,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(response.getBody(), GithubProfile.class);
    }

    public String saveUserAndGetToken(String token) throws JsonProcessingException {
        GithubProfile githubProfile = getGithubProfile(token);
        User user = userRepository.findByEmail(githubProfile.getEmail());

        if (user == null) {
            user = User.builder()
                    .login(githubProfile.getLogin())
                    .name(githubProfile.getName())
                    .id(githubProfile.getId())
                    .htmlUrl(githubProfile.getHtml_url())
                    .email(githubProfile.getEmail())
                    .role(Role.USER)
                    .build();

            userRepository.save(user);
        }

        return createToken(user);
    }

    public String createToken(User user) {
        String jwtToken = JWT.create()
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(System.currentTimeMillis()+JwtProperties.EXPIRATION_TIME))
                .withClaim("id", user.getUserId())
                .withClaim("name", user.getName())
                .sign(Algorithm.HMAC512(JwtProperties.SECRET));
        return jwtToken;
    }

    public User getUser(HttpServletRequest request) {
        // 해당 request에 JwtRequestFilter를 거쳐 인증이 완료된 사용자의
        // gitId 가 요소로 추가되어 있을 것이므로 이를 활용
        Long userId = (Long) request.getAttribute("userId");
        // 가져온 gitId로 DB에서 사용자 정보를 가져와 User 객체에 담는다.
        User user = userRepository.findByUserId(userId);
        // User 객체를 반환한다.
        return user;
    }
}