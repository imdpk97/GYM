package com.training.gym.gym.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.training.gym.gym.model.Activity;

@Repository
public interface ActivityRepository extends CrudRepository<Activity, Integer> {

	public Activity findByday(String day);

	public Activity findById(int id);

	public String deleteById(int id);

}
