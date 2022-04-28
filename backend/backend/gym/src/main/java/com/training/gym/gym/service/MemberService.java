package com.training.gym.gym.service;

import java.util.List;

import com.training.gym.gym.model.Member;
import com.training.gym.gym.model.Response;

public interface MemberService {

	public Response addMember(Member member);

	public Response updateMember(Member member);

	public Response deleteMember(int id);

	public Member getSingleMember(int id) throws Exception;

	public List<Member> getAllMember();

}
