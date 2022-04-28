package com.training.gym.gym.repository;

import org.springframework.data.repository.CrudRepository;

import com.training.gym.gym.model.Admin;
import com.training.gym.gym.model.Member;

public interface AdminRepository extends CrudRepository<Admin, Integer> {
	Admin findByUsername(String username);

}
