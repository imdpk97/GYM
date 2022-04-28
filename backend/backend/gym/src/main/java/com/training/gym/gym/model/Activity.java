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

@NamedQuery(name = "getSortedActivityList", query = "SELECT a FROM Activity a ORDER BY a.modifiedTime DESC")

@Table(name = "ACTIVITY", uniqueConstraints = @UniqueConstraint(columnNames = { "DAY" }))
@Entity
@Audited
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Activity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "DAY")
	private String day;

	@Column(name = "WORKOUT")
	private String workout;

	@Column(name = "MODIFIED_TIME")
	private Timestamp modifiedTime;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getWorkout() {
		return workout;
	}

	public void setWorkout(String workout) {
		this.workout = workout;
	}

	public Timestamp getModifiedTime() {
		return modifiedTime;
	}

	public void setModifiedTime(Timestamp modifiedTime) {
		this.modifiedTime = modifiedTime;
	}

	@Override
	public String toString() {
		return "Activity [id=" + id + ", day=" + day + ", workout=" + workout + ", modifiedTime=" + modifiedTime + "]";
	}

}
