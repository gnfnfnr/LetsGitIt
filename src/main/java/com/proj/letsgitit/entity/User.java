package com.proj.letsgitit.entity;

import lombok.NoArgsConstructor;

import javax.annotation.sql.DataSourceDefinitions;
import javax.persistence.*;

@Entity
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
    String id;

    @Column(name="html_url") //유저 깃 주소
    String htmlUrl;

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
}
