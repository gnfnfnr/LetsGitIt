package com.proj.letsgitit.dto;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import io.jsonwebtoken.Claims;
import java.util.Collection;
import java.util.Collections;

@Getter
public class UserDto {
    private final Long uid;
    public UserDto(Claims claims) {
        this.id = claims.get("uid", Long.class);
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
    }

}
