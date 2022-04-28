package com.training.gym.gym.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

@NamedQuery(name = "getSortedPLanList", query = "SELECT p FROM Plan p ORDER BY p.modifiedTime DESC")

@Entity
@Table(name = "PLAN", uniqueConstraints = @UniqueConstraint(columnNames = { "NAME" }))
public class Plan {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "NAME", nullable = false)
	@NotBlank(message = "Name can not be empty")
	private String name;

	@Column(name = "DURATION", nullable = false)
	@NotBlank(message = "Duration can not be empty")
	private String duration;

	@Column(name = "PRICE", nullable = false)
	private Double price;

	@Column(name = "MODIFIED_TIME")
	private Timestamp modifiedTime;

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

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Timestamp getModifiedTime() {
		return modifiedTime;
	}

	public void setModifiedTime(Timestamp modifiedTime) {
		this.modifiedTime = modifiedTime;
	}

	public Plan() {
		super();
	}

	public Plan(Integer id, String name, String duration, Double price, Timestamp modifiedTime) {
		super();
		this.id = id;
		this.name = name;
		this.duration = duration;
		this.price = price;
		this.modifiedTime = modifiedTime;
	}

}
