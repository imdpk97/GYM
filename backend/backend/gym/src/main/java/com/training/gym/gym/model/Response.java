package com.training.gym.gym.model;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Response {
	private String message;
	private boolean error;
	

	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isError() {
		return error;
	}
	public void setError(boolean error) {
		this.error = error;
	}
	public Response() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Response(String message, boolean error) {
		super();
		
		this.message = message;
		this.error = error;
	}
	
}
