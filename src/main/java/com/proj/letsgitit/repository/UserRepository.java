package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByLogin(String login);
    public User findById(Long id);
    public User findByName(String name);
}
