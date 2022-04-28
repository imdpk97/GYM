package com.training.gym.gym.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.gym.gym.model.Admin;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	Logger log = LoggerFactory.getLogger(AdminServiceImpl.class);

	@Autowired
	private AdminRepository repository;

	@Autowired
	private Response response;

	public Response loginMember(Admin adminData) throws Exception {

		log.info("In @class: MemberService @method: loginMember");
		try {
			Admin admin = repository.findByUsername(adminData.getUsername());
			if (!(admin.getPassword().equals(adminData.getPassword()))) {
				response.setError(true);
				response.setMessage("Login Failed!!! Invalid Username or password");
				return response;
			}
			log.debug("Admin: {}", admin);
			response.setError(false);
			response.setMessage("Login Successful");
			return response;
		} catch (Exception e) {
			log.error("Exception occured in @class MemberService @method loginMember: {}", e);
			throw e;
		}
	}

}
