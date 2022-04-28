package com.training.gym.gym.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.gym.gym.model.DietPlan;
import com.training.gym.gym.model.Member;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.repository.DietPlanRepository;

@Service
public class DietPlanServiceImpl implements DietPlanService {

	Logger log = LoggerFactory.getLogger(DietPlanServiceImpl.class);

	@Autowired
	private DietPlanRepository dietPlanRepo;

	@Autowired
	private Response response;

	@PersistenceContext
	private EntityManager em;

	@Override
	public Response addDietPlan(DietPlan dietPlan) {
		log.info("In @class DietPlanServiceImpl @method addDietPlan");
		try {
			DietPlan existingDietPlan = dietPlanRepo.findByName(dietPlan.getName());
			if (existingDietPlan == null) {
				dietPlan.setModifiedTime(new Timestamp(new Date().getTime()));
				dietPlanRepo.save(dietPlan);
				response.setMessage("DietPlan created successfully");
				response.setError(false);
				return response;
			} else {
				response.setError(true);
				response.setMessage("DietPlan with the day already exists");
				return response;
			}
		} catch (Exception e) {
			log.error("Exception occured in @class DietPlanServiceImpl @method addDietPlan: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public Response updateDietPlan(DietPlan dietPlan) {
		log.info("In @class DietPlanServiceImpl @method updateDietPlan");
		try {
			if (dietPlan.getId() != null) {
				int id = dietPlan.getId();
				DietPlan oldDietPlan = dietPlanRepo.findById(id);
				if (oldDietPlan != null) {
					dietPlan.setModifiedTime(new Timestamp(new Date().getTime()));
					dietPlanRepo.save(dietPlan);
					response.setMessage("DietPlan updated successfully");
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
		} catch (Exception e) {
			log.error("Exception occured in @class DietPlanServiceImpl @method updateDietPlan: {}", e.getMessage());
			throw e;
		}

	}

	@Override
	public Response deleteDietPlan(int id) {
		log.info("In @class DietPlanServiceImpl @method deleteDietPlan");
		try {
			log.info("Delete DietPlan by id ");
			if (id > 0) {
				DietPlan dietPlan = dietPlanRepo.findById(id);
				if (dietPlan != null) {
					dietPlanRepo.deleteById(id);
					log.info("DietPlan deleted successfully.");
					response.setMessage("DietPlan deleted successfully.");
					response.setError(false);
					return response;
				} else {
					log.error("DietPlan not found, Invalid id.");

					response.setMessage("DietPlan not found, Invalid id.");
					response.setError(true);
					return response;
				}

			} else {
				log.error("Invalid id failed to deleted this DietPlan");
				response.setMessage("Invalid id failed to deleted this DietPlan");
				response.setError(true);
				return response;
			}
		} catch (Exception e) {
			log.error("Exception occured in @class DietPlanServiceImpl @method deleteDietPlan: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public List<DietPlan> getAllDietPlan() {
		log.info("In @class DietPlanServiceImpl @method allDietPlan");
		try {
			List<DietPlan> list = new ArrayList<>();
			list = em.createNamedQuery("getSortedDietPlanList").getResultList();
			log.debug("List of activities: {}", list);
			return list;
		} catch (Exception e) {
			log.error("Exception occured in @class DietPlanServiceImpl @method allDietPlan: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public DietPlan getSingleDietPlan(int id) throws Exception {
		log.info("In @class DietPlanService @method getDietPlan");
		try {
			DietPlan dietPlan = dietPlanRepo.findById(id);
			if ((dietPlan == null)) {
				log.error("Invalid Id");
				throw new Exception();
			} else {
				log.info("DietPlan : {}", dietPlan);
				return dietPlan;
			}

		} catch (Exception e) {
			log.error("Exception occured in @class DietPlanServiceImpl @method getDietPlan: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public String getDietPlanByBmi(int bmiFrom, int bmiTo) {
		log.info("Inside @class DietPlanServiceImpl @methid getDietPlanByBmi");
		try {
			DietPlan dietPlan = (DietPlan) em.createNamedQuery("getDietPlanByBmi").setParameter("bmiFrom", bmiFrom)
					.setParameter("bmiTo", bmiTo).getSingleResult();
			return dietPlan.getName();
		} catch (Exception e) {
			log.error("Exception in @class DietPlanServiceImpl @method getDietPlanByBmi: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public String getDietPlan(String height, String weight) {
		log.info("Inside @DietPlanServiceImpl @method getDietPlan");
		try {
			int bmi = calculateBmi(height, weight);
			log.debug("Calculate bmi: {}", bmi);
			if (bmi > 0 && bmi < 18) {
				return getDietPlanByBmi(0, 18);
			} else if (bmi >= 18 && bmi < 25) {
				return getDietPlanByBmi(18, 25);
			} else if (bmi >= 25 && bmi < 30) {
				return getDietPlanByBmi(25, 30);
			} else {
				return getDietPlanByBmi(30, 100);
			}
		} catch (Exception e) {
			log.error("Exception in @DietPlanServiceImpl @method getDietPlan: {}", e.getMessage());
			throw e;
		}
	}

	public int calculateBmi(String height, String weight) {
		log.info("Inside @class DietPlanServiceImpl @method calculateBmi");
		try {
			double ht = Double.parseDouble(height) / 100;
			double wt = Double.parseDouble(weight);
			int bmi = (int) Math.round(wt / (ht * ht));
			return bmi;
		} catch (Exception e) {
			log.error("Exception in @class DietPlanServiceImpl @method calculateBmi: {}", e.getMessage());
			throw e;
		}
	}
}
