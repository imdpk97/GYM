package com.training.gym.gym.service;

import java.util.List;

import com.training.gym.gym.model.Activity;
import com.training.gym.gym.model.Response;

public interface ActivityService {

	public Response addActivity(Activity activity);

	public Response updateActivity(Activity activity);

	public Response deleteActivity(int id);

	public Activity getSingleActivity(int id) throws Exception;

	public List<Activity> getAllActivity();
}
