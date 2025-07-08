package com.cognizant.spring_learn.repository;

import com.cognizant.spring_learn.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
}
