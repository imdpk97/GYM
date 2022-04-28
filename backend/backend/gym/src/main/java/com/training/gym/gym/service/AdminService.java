package com.training.gym.gym.service;

import com.training.gym.gym.model.Admin;
import com.training.gym.gym.model.Response;

public interface AdminService {

	public Response loginMember(Admin adminData) throws Exception;

}
