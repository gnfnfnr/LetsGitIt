package com.proj.letsgitit.service;

import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.*;

@Service
@RequiredArgsConstructor
public class UserService implements OAuth2UserService {

    @Autowired
    UserRepository userRepository;
    private final HttpSession session;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        DefaultOAuth2UserService service = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = service.loadUser(userRequest);
        System.out.println("oAuth2User : " + oAuth2User);
        User member = saveOrUpdate(oAuth2User);

        session.setAttribute("oAuthToken", userRequest.getAccessToken().getTokenValue());

        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority(member.getRole().toString())),
                oAuth2User.getAttributes(), "login");
        //nameAttributeKey = Principal name에 저장됨
    }

    public User saveOrUpdate(OAuth2User oAuth2User) {
        User oAuthMember = User.builder()
                .login(oAuth2User.getAttribute("login"))
                .name(oAuth2User.getAttribute("name"))
                .id(oAuth2User.getAttribute("id"))
                .htmlUrl(oAuth2User.getAttribute("html_url"))
                .email(oAuth2User.getAttribute("email"))
                .build();

        //User member = userRepository.findByLogin(oAuthMember.getLogin());
        User user = userRepository.save(oAuthMember);
        System.out.println(user);
        return user;
    }
}
