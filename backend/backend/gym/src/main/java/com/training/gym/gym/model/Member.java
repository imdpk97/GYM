package com.training.gym.gym.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@NamedQuery(name = "getSortedMemberList", query = "SELECT m FROM Member m ORDER BY m.modifiedTime DESC")

@Entity
@Table(name = "MEMBER", uniqueConstraints = @UniqueConstraint(columnNames = { "EMAIL" }))
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "NAME")
	@NotBlank(message = "Name can not be empty")
	private String name;

	@Column(name = "EMAIL")
	@Email
	@NotBlank(message = "Email can not be empty")
	private String email;

	@Column(name = "CONTACT", length = 10)
	@NotBlank(message = "Contact No can not be empty")
	private String contact;

	@Column(name = "AGE")
	@Min(value = 16, message = "Age should not be less than 16	")
	private Integer age;

	@Column(name = "WEIGHT")
	@NotBlank(message = "Weight can not be empty")
	private String weight;

	@Column(name = "HEIGHT")
	@NotBlank(message = "Height can not be empty")
	private String height;

	@JsonFormat(pattern = "dd-MM-yyyy")
	@Column(name = "JOINING_DATE")
	private Date joiningDate;

	@Column(name = "MODIFIED_TIME")
	private Timestamp modifiedTime;

	@Column(name = "PLAN")
	private String plan;

	@Column(name = "DIET_PLAN")
	private String dietPlan;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}

	public Timestamp getModifiedTime() {
		return modifiedTime;
	}

	public void setModifiedTime(Timestamp modifiedTime) {
		this.modifiedTime = modifiedTime;
	}

	public String getPlan() {
		return plan;
	}

	public void setPlan(String plan) {
		this.plan = plan;
	}

	public String getDietPlan() {
		return dietPlan;
	}

	public void setDietPlan(String dietPlan) {
		this.dietPlan = dietPlan;
	}

	public Member() {
		super();
	}

}
