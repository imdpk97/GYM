package com.training.gym.gym.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.gym.gym.model.Plan;

@Repository
public interface PlanRepository extends CrudRepository<Plan, Integer> {

	public Plan findById(int id);

	public Plan findByName(String name);

	public String deleteById(int id);
}
