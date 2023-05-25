package com.proj.letsgitit.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name="team_board")
public class TeamBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tb_id")
    int tbId;

    @Column(name="title")
    String title;

    @Column(name="content")
    String content;

    @Column(name="u_id")
    int uId;

    @CreatedDate
    @Column(updatable = false, nullable = false, name="createdAt")
    LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name="updatedAt")
    LocalDateTime updatedAt;

    @Column(name="web_count")
    int webCount;

    @Column(name="ios_count")
    int iosCount;

    @Column(name="android_count")
    int androidCount;

    @Column(name="server_count")
    int serverCount;

    @Column(name="language")
    String language;

    @Column(name="period")
    int period;

    @Column(name="meeting_type")
    int meetingType;

    @Column(name="region")
    String region;
}
