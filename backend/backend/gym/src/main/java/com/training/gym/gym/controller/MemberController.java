package com.training.gym.gym.controller;

import java.util.List;

import javax.validation.ConstraintViolationException;

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

import com.training.gym.gym.model.Member;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.service.MemberServiceImpl;

@RestController
@RequestMapping(path = "/member")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {

	Logger log = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberServiceImpl service;

	@GetMapping("/all")
	public List<Member> getAllMember() {
		log.info("Inside @class: MemberController @method: getAllMember");
		try {
			return service.getAllMember();
		} catch (Exception ex) {
			log.error("Exception occured in @method: getAllMember : {}", ex.getMessage());
			throw ex;
		}

	}

	@GetMapping("/{id}")
	public Member getSingleMember(@PathVariable String id) throws Exception {
		log.info("Inside @class: MemberController @method: getSingleMember");
		try {
			return service.getSingleMember(Integer.parseInt(id));
		} catch (Exception ex) {
			log.error("Exception occured in @method: getSingleMember: {}", ex.getMessage());
			throw ex;
		}

	}

	@PostMapping("/addMember")
	public ResponseEntity<Response> addMember(@RequestBody Member member) {
		log.info("Inside @class: MemberController @method: registerMember");
		Response response = new Response();
		try {
			response = service.addMember(member);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			log.error("Exception occured in @class MemberController @method addMember: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@PutMapping("/update")
	public ResponseEntity<Response> updateMember(@RequestBody Member member) {
		log.info("Inside @class: MemberController @method: update Member");
		try {
			return ResponseEntity.ok(service.updateMember(member));
		} catch (Exception e) {
			log.error("Exception occured in @class: MemberController @method: UpdateMember: {}", e.getMessage());
			return (ResponseEntity<Response>) ResponseEntity.internalServerError();
		}
	}

	@DeleteMapping("/delete/{id}")
	public Response deleteMember(@PathVariable String id) {
		log.info("Inside @class: MemberController @method: deleteMember");
		try {
			return service.deleteMember(Integer.parseInt(id));
		} catch (Exception e) {
			log.error("Exception occured in @class: MemberController @method: deleteMember: {}", e.getMessage());
			throw e;
		}
	}
}
