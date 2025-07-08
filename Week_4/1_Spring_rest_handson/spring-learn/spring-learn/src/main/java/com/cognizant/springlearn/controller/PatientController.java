package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Patient;
import com.cognizant.spring_learn.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientRepository repo;

    @GetMapping
    public List<Patient> getAllPatients() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable int id) {
        return repo.findById(id).orElse(null);
    }

    @PostMapping
    public Patient createPatient(@RequestBody Patient patient) {
        return repo.save(patient);
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable int id, @RequestBody Patient patient) {
        patient.setId(id);
        return repo.save(patient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable int id) {
        repo.deleteById(id);
    }
}
