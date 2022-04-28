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

import org.hibernate.envers.Audited;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NamedQuery(name = "getSortedDietPlanList", query = "SELECT d FROM DietPlan d ORDER BY d.modifiedTime DESC")
@NamedQuery(name = "getDietPlanByBmi", query = "SELECT d FROM DietPlan d WHERE d.bmiFrom=:bmiFrom AND d.bmiTo=:bmiTo")

@Table(name = "DIET_PLAN", uniqueConstraints = @UniqueConstraint(columnNames = { "NAME" }))
@Entity
@Audited
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class DietPlan {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "CALORIES")
	private String calories;

	@Column(name = "BMI_FROM")
	private int bmiFrom;

	@Column(name = "BMI_TO")
	private int bmiTo;

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

	public String getCalories() {
		return calories;
	}

	public void setCalories(String calories) {
		this.calories = calories;
	}

	public Timestamp getModifiedTime() {
		return modifiedTime;
	}

	public void setModifiedTime(Timestamp modifiedTime) {
		this.modifiedTime = modifiedTime;
	}

	public int getBmiFrom() {
		return bmiFrom;
	}

	public void setBmiFrom(int bmiFrom) {
		this.bmiFrom = bmiFrom;
	}

	public int getBmiTo() {
		return bmiTo;
	}

	public void setBmiTo(int bmiTo) {
		this.bmiTo = bmiTo;
	}

	@Override
	public String toString() {
		return "DietPlan [id=" + id + ", name=" + name + ", calories=" + calories + ", bmiFrom=" + bmiFrom + ", bmiTo="
				+ bmiTo + ", modifiedTime=" + modifiedTime + "]";
	}

}
