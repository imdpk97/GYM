package com.training.gym.gym.service;

import java.util.List;

import com.training.gym.gym.model.DietPlan;
import com.training.gym.gym.model.Response;

public interface DietPlanService {

	public Response addDietPlan(DietPlan dietPlan);

	public Response updateDietPlan(DietPlan dietPlan);

	public Response deleteDietPlan(int id);

	public DietPlan getSingleDietPlan(int id) throws Exception;

	public List<DietPlan> getAllDietPlan();

	public String getDietPlan(String height, String weight);

	public String getDietPlanByBmi(int bmiTo, int bmiFrom);

}
