package com.training.gym.gym.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.gym.gym.model.Admin;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.service.AdminServiceImpl;

@RestController
@RequestMapping(path = "/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	Logger log = LoggerFactory.getLogger(AdminController.class);

	@Autowired
	private AdminServiceImpl service;

	@PostMapping("/login")
	public ResponseEntity<Response> login(@RequestBody Admin adminData) {
		log.info("Inside @class: AdminController @method: loginMember");
		try {
			return ResponseEntity.ok(service.loginMember(adminData));
		} catch (Exception e) {
			log.error("Exception In @class: AdminController @method: login: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

}
