package com.proj.letsgitit.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.sql.DataSourceDefinitions;
import javax.persistence.*;
import java.net.URL;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="u_id")
    int uId;

    @Column(name="login")   //이게 깃에서 id를 가져올 때 객체명
    String login;

    @Column(name="name")
    String name; //근데 이건 무슨 컬럼이지..? 일단 노션에 써있어서 넣음 -> 깃에서 레포 이름 가져올 때 객체명

    @Column(name="id")  //이건 깃이 부여한 id...? 아마도
    Long id;

    @Column(name="html_url") //유저 깃 주소
    URL htmlUrl;

    @Column(name="blog")
    String blog;

    @Column(name="location")
    String location;

    @Column(name="email")
    String email;

    @Column(name="school")
    String school;

    @Column(name="major")
    String major;

    @Column(name="graduate")
    String graduate;

    //플랫폼 어케 받기로 했는지 기억이 안난다...

    @Column(name="intro") //소개글
    String intro;

    @Column(name="career") //경력 회사 이름
    String career;

    @Column(name="career_year1") //경력 연도
    String year1;

    @Column(name="career_yaer2")
    String year2;

    @Column(name="tool")
    String tool;

    //프로그래밍 언어 총 5개 입력가능하고 숙련도도 입력받는다
    @Column(name="lang1")
    String lang1;

    @Column(name="lang1_skill")
    String lang1Skill;

    @Column(name="lang2")
    String lang2;

    @Column(name="lang2_skill")
    String lang2Skill;

    @Column(name="lang3")
    String lang3;

    @Column(name="lang3_skill")
    String lang3Skill;

    @Column(name="lang4")
    String lang4;

    @Column(name="lang4_skill")
    String lang4Skill;

    @Column(name="lang5")
    String lang5;

    @Column(name="lang5_skill")
    String lang5Skill;

    @Builder
    public User(String login, String name, Long id, URL htmlUrl, String email) {
        this.login = login;
        this.name = name;
        this.id = id;
        this.htmlUrl = htmlUrl;
        this.email = email;
    }
}
