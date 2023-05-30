package com.proj.letsgitit.config;

// Oauth 로그인 진행 순서
// 1. 인가 코드 발급(회원 인증)
// 2. 엑세스 토큰 발급(접근 권한 부여)
// 3. 액세스 토큰을 이용해 사용자 정보 불러오기
// 4. 불러온 사용자 정보를 토대로 자동 회원가입/로그인 진행
// ※ 소셜 플랫폼의 로그인과 프로젝트 앱의 로그인은 별개임!!

import com.proj.letsgitit.config.jwt.JwtRequestFilter;
import com.proj.letsgitit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
//spring security 5.7이상에서는 더 이상 WebSecurityConfigurerAdapter 사용을 권장하지 않는다
//SecurityFilterChain Bean 등록을 통해 해결
@ConditionalOnDefaultWebSecurity
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserRepository userRepository;

    public static final String FRONT_URL = "http://3.35.159.112:9000";

    private CorsFilter corsFilter;

    public SecurityConfig(CorsFilter corsFilter) {

        this.corsFilter = corsFilter;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .sessionManagement()  // session 을 사용하지 않음
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .httpBasic().disable()
                .formLogin().disable()
                .addFilter(corsFilter); // @CrossOrigin(인증X), 시큐리티 필터에 등록 인증(O)

        http.authorizeRequests()
                .antMatchers(FRONT_URL+"/**")
                .authenticated()
                .anyRequest().permitAll()

                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint());

        http.addFilterBefore(new JwtRequestFilter(),
                UsernamePasswordAuthenticationFilter.class);
    }

}