package com.training.gym.gym.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.gym.gym.model.DietPlan;

@Repository
public interface DietPlanRepository extends CrudRepository<DietPlan, Integer> {

	public DietPlan findByName(String name);

	public DietPlan findById(int id);

	public String deleteById(int id);

}
