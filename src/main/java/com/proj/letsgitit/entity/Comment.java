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
@Table(name="comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id")
    int commentId;
    @Column(name="commenter") //댓글 작성자 id
    int commenter;
    @Column(name="b_id") //글 id
    int bId;
    @CreatedDate
    @Column(updatable = false, nullable = false, name="createdAt")
    LocalDateTime createdAt;
    @LastModifiedDate
    @Column(name="updatedAt")
    LocalDateTime updatedAt;
    @Column(name="type")
    int type; // 0이면 게시글, 1이면 팀매칭
    @Column(name="parent_comment") //부모 댓글인지 구분
    int parentComment; // 대댓글이면 0 부모 댓글이면 1
    @Column(name="parent_comment_id")
    int parentCommentId; // 대댓글의 부모 댓글 id

}
