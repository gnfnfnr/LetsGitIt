package com.proj.letsgitit.controller;

import com.proj.letsgitit.entity.User;
import org.kohsuke.github.GHUser;
import org.kohsuke.github.GitHub;
import org.kohsuke.github.GitHubBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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

    @GetMapping("/login/getGithubUrl")
    public @ResponseBody String getGithubUrl(HttpServletRequest request) {
        String reqUrl = githubApiUrl + "?client_id=" + clientId + "&redirect_uri=" + githubRedirectUrl;
        return reqUrl;
    }

    @GetMapping("/login/oauth2")
    public ResponseEntity main(@AuthenticationPrincipal OAuth2User oAuth2User, HttpSession session) throws IOException {
        System.out.println("userController");
        GitHub gitHub = new GitHubBuilder()
                .withOAuthToken(session.getAttribute("oAuthToken").toString(), oAuth2User.getName()).build();

        GHUser user = gitHub.getUser(oAuth2User.getName());
        System.out.println("user = " + user);

        User dto = User.builder()
                .login(user.getLogin())
                .name(user.getName())
                .id((int)user.getId())
                .htmlUrl(user.getHtmlUrl().toString())
                .email(user.getEmail())
                .build();

        return ResponseEntity.ok(dto);
    }

}