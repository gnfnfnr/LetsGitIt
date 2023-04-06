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

    @Column(name="login")
    String login;

    @Column(name="name")
    String name; //근데 이건 무슨 컬럼이지..? 일단 노션에 써있어서 넣음

    @Column(name="id")
    String id;

    @Column(name="html_url")
    String htmlUrl;

    @Column(name="blog")
    String blog;

    @Column(name="location")
    String location;

    @Column(name="email")
    String email;


}
