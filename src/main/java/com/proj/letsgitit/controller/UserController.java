package com.proj.letsgitit.controller;

import com.proj.letsgitit.entity.User;
import org.kohsuke.github.GHUser;
import org.kohsuke.github.GitHub;
import org.kohsuke.github.GitHubBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;
import java.io.IOException;

@Controller
public class UserController {
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