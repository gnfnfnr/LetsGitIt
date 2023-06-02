package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByLogin(String login);
    public User findByEmail(String email);
    public User findByUserId(Long userId);
}
