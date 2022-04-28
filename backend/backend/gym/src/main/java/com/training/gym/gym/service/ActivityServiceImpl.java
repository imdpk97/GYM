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

import com.training.gym.gym.model.Activity;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.repository.ActivityRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ActivityServiceImpl implements ActivityService {
	Logger log = LoggerFactory.getLogger(ActivityServiceImpl.class);

	@Autowired
	private ActivityRepository activityRepo;

	@Autowired
	private Response response;

	@PersistenceContext
	private EntityManager em;

	@Override
	public Response addActivity(Activity activity) {
		log.info("In @class ActivityServiceImpl @method addActivity");
		try {
			Activity existingActivity = activityRepo.findByday(activity.getDay());
			if (existingActivity == null) {
				activity.setModifiedTime(new Timestamp(new Date().getTime()));
				activityRepo.save(activity);
				response.setMessage("Activity created successfully");
				response.setError(false);
				return response;
			} else {
				response.setError(true);
				response.setMessage("Activity with the day already exists");
				return response;
			}
		} catch (Exception e) {
			log.error("Exception occured in @class ActivityServiceImpl @method addActivity: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public Response updateActivity(Activity activity) {
		log.info("In @class ActivityServiceImpl @method updateActivity");
		try {
			if (activity.getId() != null) {
				int id = activity.getId();
				Activity oldActivity = activityRepo.findById(id);
				if (oldActivity != null) {
					activity.setModifiedTime(new Timestamp(new Date().getTime()));
					activityRepo.save(activity);
					response.setMessage("Activity updated successfully");
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
			log.error("Exception occured in @class ActivityServiceImpl @method updateActivity: {}", e.getMessage());
			throw e;
		}

	}

	@Override
	public Response deleteActivity(int id) {
		log.info("In @class ActivityServiceImpl @method deleteActivity");
		try {
			log.info("Delete Activity by id ");
			if (id > 0) {
				Activity activity = activityRepo.findById(id);
				if (activity != null) {
					activityRepo.deleteById(id);
					log.info("Activity deleted successfully.");
					response.setMessage("Activity deleted successfully.");
					response.setError(false);
					return response;
				} else {
					log.error("Activity not found, Invalid id.");

					response.setMessage("Activity not found, Invalid id.");
					response.setError(true);
					return response;
				}

			} else {
				log.error("Invalid id failed to deleted this Activity");
				response.setMessage("Invalid id failed to deleted this Activity");
				response.setError(true);
				return response;
			}
		} catch (Exception e) {
			log.error("Exception occured in @class ActivityServiceImpl @method deleteActivity: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public List<Activity> getAllActivity() {
		log.info("In @class ActivityServiceImpl @method allActivity");
		try {
			List<Activity> list = new ArrayList<>();
			list = em.createNamedQuery("getSortedActivityList").getResultList();
			log.debug("List of activities: {}", list);
			return list;
		} catch (Exception e) {
			log.error("Exception occured in @class ActivityServiceImpl @method allActivity: {}", e.getMessage());
			throw e;
		}
	}

	@Override
	public Activity getSingleActivity(int id) throws Exception {
		log.info("In @class ActivityService @method getActivity");
		try {
			Activity activity = activityRepo.findById(id);
			if ((activity == null)) {
				log.error("Invalid Id");
				throw new Exception();
			} else {
				log.info("Activity : {}", activity);
				return activity;
			}

		} catch (Exception e) {
			log.error("Exception occured in @class ActivityServiceImpl @method getActivity: {}", e.getMessage());
			throw e;
		}

	}

}
