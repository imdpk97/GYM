package com.training.gym.gym.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.gym.gym.model.Member;

@Repository
public interface MemberRepository extends CrudRepository<Member, String> {

	public Member findById(int id);

	public Member findByEmail(String email);

	public String deleteById(int id);
}
