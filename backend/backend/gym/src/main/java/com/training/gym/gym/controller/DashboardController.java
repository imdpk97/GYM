package com.training.gym.gym.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.gym.gym.service.DashboardService;

@RestController
@RequestMapping(path = "/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

	Logger log = LoggerFactory.getLogger(DashboardController.class);

	@Autowired
	DashboardService service;

	@GetMapping("/getCount")
	public Map<String, Long> getCount() throws Exception {
		log.info("Inside @class: DashboardControllerImpl @method: IDashboardController");
		try {
			return service.getCount();
		} catch (Exception e) {
			log.error("Exception in @class DashboardController @method: getCount");
			throw new Exception(e.getMessage());
		}
	}

}
