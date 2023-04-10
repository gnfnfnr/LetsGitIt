package com.proj.letsgitit.Controller;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GithubController {
    @Value("${clientId}")
    String clientId;

    @GetMapping("/login")
    public String home(){
        return "index";
        //return "https://github.com/login/oauth/authorize?client_id=" + clientId+ "&redirect_uri=http://localhost:9000/login/oauth2";
    }
}
