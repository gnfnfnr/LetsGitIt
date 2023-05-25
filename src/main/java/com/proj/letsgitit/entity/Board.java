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
@Table(name="board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_id")
    int postId;
    @Column(name="type")
    int type;
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

    @Column(name="comment_count")
    int commentCount;

    @Column(name="scrap_count")
    int scrapCount;

}
