package com.proj.letsgitit.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proj.letsgitit.config.jwt.InMemoryProviderRepository;
import com.proj.letsgitit.config.jwt.JwtTokenProvider;
import com.proj.letsgitit.config.jwt.LoginResponse;
import com.proj.letsgitit.entity.GithubProfile;
import com.proj.letsgitit.entity.OAuthToken;
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

    private final InMemoryProviderRepository inMemoryProviderRepository;
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public LoginResponse login(String code) throws JsonProcessingException {
        // access token 가져오기
        OAuthToken oAuthToken = getOauthToken(code);
        // 유저 정보 가져오기
        GithubProfile githubProfile = getGithubProfile(oAuthToken);
        //유저 DB에 저장하기
        User user = saveAndGetUser(githubProfile);

        //우리 애플리케이션의 JWT 토큰 만들기
        String accessToken = jwtTokenProvider.createAccessToken(String.valueOf(user.getUId()));
        String refreshToken = jwtTokenProvider.createRefreshToken();

        return LoginResponse.builder()
                .id(user.getUId())
                .login(user.getLogin())
                .name(user.getName())
                .email(user.getEmail())
                .htmlUrl(user.getHtmlUrl())
                .role(user.getRole())
                .tokenType("Bearer")
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
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
        User findUser = userRepository.findByGitId(githubProfile.getGitId());
        if (findUser != null) {
            findUser.setHtmlUrl(githubProfile.getHtml_url());
            findUser.setLogin(githubProfile.getLogin());
            return findUser;
        }
        findUser = User.builder()
                .login(githubProfile.getLogin())
                .name(githubProfile.getName())
                .gitId(githubProfile.getGitId())
                .htmlUrl(githubProfile.getHtml_url())
                .email(githubProfile.getEmail())
                .build();
        return userRepository.save(findUser);
    }

    public User getUser(HttpServletRequest request) {
        Long gitId = (Long) request.getAttribute("gitId");
    }
}