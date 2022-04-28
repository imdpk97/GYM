package com.training.gym.gym.service;

import java.util.List;

import com.training.gym.gym.model.Plan;
import com.training.gym.gym.model.Response;

public interface PlanService {

	public Response addPlan(Plan plan);

	public Response updatePlan(Plan plan);

	public Response deletePlan(int id);

	public Plan getSinglePlan(int id) throws Exception;

	public List<Plan> getAllPlan();
}
