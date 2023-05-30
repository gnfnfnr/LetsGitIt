package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듦
@NoArgsConstructor // 파라미터가 없는 기본 생성자를 생성
@Data // data 어노테이션에서 getter와 setter 부분이 작동하지 않아서 아래 추가함.
@Getter
@Setter
public class OAuthToken {
    private String accessToken;
    private String tokenType;
    private String scope;
    private String bearer;

    @JsonProperty("access_token")
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
    @JsonProperty("token_type")
    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
    public void setScope(String scope) {
        this.scope = scope;
    }

    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public String getScope() {
        return scope;
    }

    public String getBearer() {
        return bearer;
    }


}
