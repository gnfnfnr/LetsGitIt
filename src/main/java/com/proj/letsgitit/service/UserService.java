package com.proj.letsgitit.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpSession;
import java.util.*;

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
        params.add("redirect_", clientId);

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

    public GithubProfile getGithubProfile(OAuthToken oAuthToken) throws JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "token " + oAuthToken.getAccessToken());
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(
                PROFILE_REQUEST_URL,
                HttpMethod.GET,
                new HttpEntity<>(headers),
                String.class
        );
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(response.getBody(), GithubProfile.class);
    }

    public User saveAndGetUser(GithubProfile githubProfile) {
        User findUser = userRepository.findById(githubProfile.getId());
        if (findUser != null) {
            return findUser;
        }
        findUser = User.builder()
                .login(githubProfile.getLogin())
                .name(githubProfile.getName())
                .id(githubProfile.getId())
                .htmlUrl(githubProfile.getHtml_url())
                .email(githubProfile.getEmail())
                .build();
        return userRepository.save(findUser);
    }
}