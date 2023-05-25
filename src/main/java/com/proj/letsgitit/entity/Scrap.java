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
public class Scrap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="s_id")
    int sId;
    @Column(name="type")
    int type; //0 : 게시글, 1 : 팀매칭
    @Column(name="resource_id")
    int resourceId; //스크랩 당한 글 id
    @CreatedDate
    @Column(updatable = false, nullable = false, name="createdAt")
    LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name="updatedAt")
    LocalDateTime updatedAt;
}
