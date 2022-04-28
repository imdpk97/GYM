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
import org.springframework.transaction.annotation.Transactional;

import com.training.gym.gym.model.Member;
import com.training.gym.gym.model.Response;
import com.training.gym.gym.repository.DietPlanRepository;
import com.training.gym.gym.repository.MemberRepository;
import com.training.gym.gym.repository.PlanRepository;

@Service
public class MemberServiceImpl implements MemberService {

	Logger log = LoggerFactory.getLogger(MemberServiceImpl.class);

	@Autowired
	private MemberRepository memberRepo;

	@Autowired
	private PlanRepository planRepo;

	@Autowired
	private DietPlanRepository dietPlanRepo;

	@Autowired
	private DietPlanService dietPlanService;

	@Autowired
	private Response response;

	@PersistenceContext
	private EntityManager em;

	@Override
	public Response addMember(Member member) {
		log.info("Inside @class: MemberService @method: addMember");
		try {
			Member existingMember = memberRepo.findByEmail(member.getEmail());
			log.debug("Existing Member: {}", existingMember);
			if (existingMember == null) {
				member.setModifiedTime(new Timestamp(new Date().getTime()));
				member.setDietPlan(dietPlanService.getDietPlan(member.getHeight(), member.getWeight()));
				log.debug("member----------------{}", member);
				memberRepo.save(member);
				response.setMessage("Member created successfully");
				response.setError(false);
				return response;
			} else {
				response.setError(true);
				response.setMessage("Email Id already exists!!");
				return response;
			}
		} catch (Exception e) {
			log.error("Exception In @class: MemberService @method: addMember: {}", e);
			throw e;
		}
	}

	@Override
	public Response updateMember(Member member) {
		log.info("In @class: MemberServiceImpl @method: updateMember");
		try {
			if (member.getId() != null) {
				Member oldMember = memberRepo.findById((int) member.getId());
				if (oldMember != null) {
					member.setModifiedTime(new Timestamp(new Date().getTime()));
					member.setDietPlan(dietPlanService.getDietPlan(member.getHeight(), member.getWeight()));
					memberRepo.save(member);
					response.setMessage("Member updated successfully");
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
			log.error(" In @class: MemberService @method: updateMember: {}", ex.getMessage());
			throw ex;
		}
	}

	@Override
	@Transactional
	public Response deleteMember(int id) {
		log.info("Inside @class: MemberServiceImpl @method: deleteMember");
		try {
			if (id > 0) {
				Member member = memberRepo.findById(id);
				if (member != null) {
					memberRepo.deleteById(id);
					log.info("Member deleted successfully.");
					response.setMessage("Member deleted successfully.");
					response.setError(false);
					return response;
				} else {
					log.error("Member not found, Invalid id.");

					response.setMessage("Member not found, Invalid id.");
					response.setError(true);
					return response;
				}

			} else {
				log.error("Invalid id failed to deleted this Member");
				response.setMessage("Invalid id failed to deleted this Member");
				response.setError(true);
				return response;
			}
		} catch (Exception ex) {
			log.error("Exception occured in @class MemberServiceImpl @method deleteMember: {}", ex.getMessage());
			throw ex;
		}
	}

	@Override
	public List<Member> getAllMember() {
		log.info("Inside @class: MemberService @method: getAllMember");
		try {
			List<Member> list = new ArrayList<>();
			list = em.createNamedQuery("getSortedMemberList").getResultList();
			log.debug("List of members: {}", list);
			return list;
		} catch (Exception e) {
			log.error("Exception occured in @method: getAllMember: {}", e.getMessage());
			throw e;
		}

	}

	@Override
	public Member getSingleMember(int id) throws Exception {
		log.info("Inside @class MemberServiceImpl @method getSinglePlan");
		try {
			Member member = memberRepo.findById(id);
			if ((member == null)) {
				log.error("Invalid Id");
				throw new Exception();
			} else {
				log.info("Member : {}", member);
				return member;
			}

		} catch (Exception e) {
			log.error("Exception in @class MemberService @method getSingleMember: {}", e.getMessage());
			throw e;
		}

	}

}
