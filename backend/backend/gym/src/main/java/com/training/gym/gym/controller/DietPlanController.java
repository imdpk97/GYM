package com.training.gym.gym.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.gym.gym.model.DietPlan;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.service.DietPlanServiceImpl;

@RestController
@RequestMapping(path = "/dietPlan")
@CrossOrigin(origins = "http://localhost:4200")
public class DietPlanController {
	Logger log = LoggerFactory.getLogger(DietPlanController.class);

	@Autowired
	private DietPlanServiceImpl dietPlanService;

	@PostMapping("/addDietPlan")
	public ResponseEntity<Response> addDietPlan(@RequestBody DietPlan dietPlan) {
		log.info("Inside @class: DietPlanController @method: registerDietPlan");
		Response response = new Response();
		try {
			response = dietPlanService.addDietPlan(dietPlan);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			log.error("Exception occured in @class DietPlanController @method addDietPlan: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@PutMapping("/update")
	public ResponseEntity<Response> updateDietPlan(@RequestBody DietPlan dietPlan) {
		log.info("Inside @class: DietPlanController @method: update DietPlan");
		try {
			return ResponseEntity.ok(dietPlanService.updateDietPlan(dietPlan));
		} catch (Exception e) {
			log.error("Exception occured in @class: DietPlanController @method: UpdateDietPlan: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@DeleteMapping("/delete/{id}")
	public Response deleteDietPlan(@PathVariable String id) {
		log.info("Inside @class: DietPlanController @method: deleteDietPlan");
		try {
			return dietPlanService.deleteDietPlan(Integer.parseInt(id));
		} catch (Exception e) {
			log.error("Exception occured in @class: DietPlanController @method: deleteDietPlan: {}", e.getMessage());
			throw e;
		}
	}

	@GetMapping("/{id}")
	public DietPlan getSingleDietPlan(@PathVariable String id) throws Exception {
		log.info("Inside @class: DietPlanController @method: getSingleDietPlan");
		try {
			return dietPlanService.getSingleDietPlan(Integer.parseInt(id));
		} catch (Exception ex) {
			log.error("Exception occured in @method: getSingleDietPlan: {}", ex.getMessage());
			throw ex;
		}

	}

	@GetMapping("/all")
	public List<DietPlan> getAllDietPlan() {
		log.info("Inside @class: DietPlanController @method: getAllDietPlan");
		try {
			return dietPlanService.getAllDietPlan();
		} catch (Exception ex) {
			log.error("Exception occured in @method: getAllDietPlan : {}", ex.getMessage());
			throw ex;
		}

	}

}
