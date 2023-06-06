package com.proj.letsgitit.config.jwt;

public interface JwtProperties {
    // JWT의 Signature를 해싱할 때 사용되는 비밀 키
    String SECRET = "letsgitit";
    //토큰의 만료 기간이다. 초단위로 계산된다. 해당 프로젝트에서는 리프레시 토큰을 사용하지 않기 때문에 길게(10일) 설정해줬다.
    int EXPIRATION_TIME =  864000000;
    // 토큰 앞에 붙는 정해진 형식. Bearer 뒤에 한 칸 공백을 넣어줘야 함
    String TOKEN_PREFIX = "Bearer ";

    // 헤더의 Authorization 이라는 항목에 토큰을 넣어줄 것
    String HEADER_STRING = "Authorization";
}
