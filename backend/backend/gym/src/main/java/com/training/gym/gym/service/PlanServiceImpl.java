package com.training.gym.gym.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.gym.gym.model.Member;
import com.training.gym.gym.model.Plan;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.repository.PlanRepository;

@Service
public class PlanServiceImpl implements PlanService {

	Logger log = LoggerFactory.getLogger(PlanServiceImpl.class);

	@Autowired
	private PlanRepository planRepo;

	@Autowired
	private Response response;

	@PersistenceContext
	private EntityManager em;

	@Override
	public Response addPlan(Plan plan) {
		log.info("In @class planServiceImpl @method addplan");
		try {
			Plan existingPlan = planRepo.findByName(plan.getName());
			if (existingPlan == null) {
				plan.setModifiedTime(new Timestamp(new Date().getTime()));
				planRepo.save(plan);
				response.setMessage("Plan created successfully");
				response.setError(false);
				return response;
			} else {
				response.setError(true);
				response.setMessage("Plan with the name already exists");
				return response;
			}
		} catch (Exception e) {
			log.error("Exception occured in @class planServiceImpl @method addPlan");
			throw e;
		}
	}

	@Override
	public Response updatePlan(Plan plan) {
		log.info("In @class planServiceImpl @method updateplan");
		try {
			if (plan.getId() != null) {
				Plan oldPlan = planRepo.findById((int) plan.getId());
				if (oldPlan != null) {
					plan.setModifiedTime(new Timestamp(new Date().getTime()));
					planRepo.save(plan);
					response.setMessage("Plan updated successfully");
					response.setError(false);
					return response;
				} else {
					log.info("Invalid id");
					response.setMessage("Invalid id");
					response.setError(true);
					return response;
				}
			} else {
				log.info("ID is mandatory");
				response.setMessage("Id is mandatory");
				response.setError(true);
				return response;
			}
		} catch (Exception ex) {
			log.error("Exception occured in @class planServiceImpl @method updatePlan");
			throw ex;
		}

	}

	@Override
	public Response deletePlan(int id) {
		log.info("In @class planServiceImpl @method deleteplan");
		try {
			log.info("Delete plan by id ");
			if (id > 0) {
				Plan plan = planRepo.findById(id);
				if (plan != null) {
					planRepo.deleteById(id);
					log.info("Plan deleted successfully.");
					response.setMessage("Plan deleted successfully.");
					response.setError(false);
					return response;
				} else {
					log.error("PLan not found, Invalid id.");

					response.setMessage("Plan not found, Invalid id.");
					response.setError(true);
					return response;
				}

			} else {
				log.error("Invalid id failed to deleted this plan");
				response.setMessage("Invalid id failed to deleted this plan");
				response.setError(true);
				return response;
			}
		} catch (Exception ex) {
			log.error("Exception occured in @class planServiceImpl @method deletePlan");
			throw ex;
		}
	}

	@Override
	public Plan getSinglePlan(int id) throws Exception {
		log.info("In @class planService @method getplan");
		try {
			Plan plan = planRepo.findById(id);
			if ((plan == null)) {
				log.error("Invalid Id");
				throw new Exception();
			} else {
				log.info("Plan : {}", plan);
				return plan;
			}

		} catch (Exception e) {
			log.error("Exception occured in @class planServiceImpl @method getPlan");
			throw e;
		}
	}

	@Override
	public List<Plan> getAllPlan() {
		log.info("In @class planServiceImpl @method allPlan");
		try {
			List<Plan> list = new ArrayList<>();
			list = em.createNamedQuery("getSortedPLanList").getResultList();
			log.debug("List of plans: {}", list);
			return list;
		} catch (Exception e) {
			log.error("Exception occured in @class planServiceImpl @method allPlan");
			throw e;
		}
	}
}
