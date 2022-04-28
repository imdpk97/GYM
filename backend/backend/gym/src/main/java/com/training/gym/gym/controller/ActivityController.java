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

import com.training.gym.gym.model.Activity;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.service.ActivityServiceImpl;

@RestController
@RequestMapping(path = "/activity")
@CrossOrigin(origins = "http://localhost:4200")
public class ActivityController {
	
	Logger log = LoggerFactory.getLogger(ActivityController.class);

	@Autowired
	private ActivityServiceImpl activityService;

	@GetMapping("/all")
	public List<Activity> getAllActivity() {
		log.info("Inside @class: ActivityController @method: getAllActivity");
		try {
			return activityService.getAllActivity();
		} catch (Exception ex) {
			log.error("Exception occured in @method: getAllActivity : {}", ex.getMessage());
			throw ex;
		}

	}

	@GetMapping("/{id}")
	public Activity getSingleActivity(@PathVariable String id) throws Exception {
		log.info("Inside @class: ActivityController @method: getSingleActivity");
		try {
			return activityService.getSingleActivity(Integer.parseInt(id));
		} catch (Exception ex) {
			log.error("Exception occured in @method: getSingleActivity: {}", ex.getMessage());
			throw ex;
		}

	}

	@PostMapping("/addActivity")
	public ResponseEntity<Response> addActivity(@RequestBody Activity activity) {
		log.info("Inside @class: ActivityController @method: registerActivity");
		Response response = new Response();
		try {
			response = activityService.addActivity(activity);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			log.error("Exception occured in @class ActivityController @method addActivity: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@PutMapping("/update")
	public ResponseEntity<Response> updateActivity(@RequestBody Activity activity) {
		log.info("Inside @class: ActivityController @method: update Activity");
		try {
			return ResponseEntity.ok(activityService.updateActivity(activity));
		} catch (Exception e) {
			log.error("Exception occured in @class: ActivityController @method: UpdateActivity: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@DeleteMapping("/delete/{id}")
	public Response deleteActivity(@PathVariable String id) {
		log.info("Inside @class: ActivityController @method: deleteActivity");
		try {
			return activityService.deleteActivity(Integer.parseInt(id));
		} catch (Exception e) {
			log.error("Exception occured in @class: ActivityController @method: deleteActivity: {}", e.getMessage());
			throw e;
		}
	}

}
