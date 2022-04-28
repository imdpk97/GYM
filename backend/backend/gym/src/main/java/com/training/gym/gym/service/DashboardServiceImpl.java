package com.training.gym.gym.service;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.gym.gym.repository.ActivityRepository;
import com.training.gym.gym.repository.DietPlanRepository;
import com.training.gym.gym.repository.MemberRepository;
import com.training.gym.gym.repository.PlanRepository;

@Service
public class DashboardServiceImpl implements DashboardService {

	Logger log = LoggerFactory.getLogger(DashboardServiceImpl.class);

	@Autowired
	MemberRepository memberRepo;

	@Autowired
	PlanRepository planRepo;

	@Autowired
	ActivityRepository activityRepo;

	@Autowired
	DietPlanRepository dietPlanRepo;

	@Override
	public Map<String, Long> getCount() {
		log.info("Inside @class: DashboardServiceImpl @method: getCount");
		try {
			Map<String, Long> map = new HashMap<>();
			map.put("MemberCount", memberRepo.count());
			map.put("GymPlanCount", planRepo.count());
			map.put("ActivityCount", activityRepo.count());
			map.put("DietPlanCount", dietPlanRepo.count());
			return map;
		} catch (Exception e) {
			log.error("Exception in getCount");
			throw e;
		}
	}
}
