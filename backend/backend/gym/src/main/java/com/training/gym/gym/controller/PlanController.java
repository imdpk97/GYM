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

import com.training.gym.gym.model.Plan;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.service.PlanService;

@RestController
@RequestMapping(path = "/plan")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanController {

	Logger log = LoggerFactory.getLogger(PlanController.class);

	@Autowired
	private PlanService service;

	@PostMapping("/addPlan")
	public ResponseEntity<Response> addPlan(@RequestBody Plan plan) {
		log.info("Inside @class: UserController @method: addPlan");
		try {
			return ResponseEntity.ok(service.addPlan(plan));
		} catch (Exception e) {
			log.error("Exception In @class: UserController @method: addplan: {}", e);
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@PutMapping("/update")
	public ResponseEntity<Response> updatePlan(@RequestBody Plan plan) {
		log.info("In @class UserController @method UpdatePlan");
		try {
			Response pln = service.updatePlan(plan);
			return ResponseEntity.ok(pln);
		} catch (Exception e) {
			log.error("Exception In @class UserController @method UpdatePlan: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@DeleteMapping("/delete/{id}")
	public Response deletePlan(@PathVariable String id) {
		log.info("In @class UserController @method deleteUser");
		try {
			Response message = service.deletePlan(Integer.parseInt(id));
			return message;
		} catch (Exception e) {
			log.error("Exception In @class UserController @method deleteuser: {}", e.getMessage());
			throw e;
		}
	}

	@GetMapping("/{id}")
	public Plan getPlan(@PathVariable String id) throws Exception {
		log.info("Inside @class: PlanController @method: getPlan");
		try {
			return service.getSinglePlan(Integer.parseInt(id));
		} catch (Exception ex) {
			log.error("Exception occured in method: getPlan: {}", ex.getMessage());
			throw ex;
		}

	}

	@GetMapping("/all")
	public List<Plan> getAllPlan() {
		log.info("Inside @class: PlanController @method: getAllPlan");
		try {
			return service.getAllPlan();
		} catch (Exception ex) {
			log.error("Exception occured in @method: getAllPlan: {}", ex.getMessage());
			throw ex;
		}

	}

}
