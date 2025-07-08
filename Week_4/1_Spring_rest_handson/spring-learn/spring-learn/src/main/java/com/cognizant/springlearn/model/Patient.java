package com.cognizant.spring_learn.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    private int id;

    @Column(name = "patient_name")
    private String patientName;

    private String diagnosis;

    @Column(name = "report_date")
    @Temporal(TemporalType.DATE)
    private Date reportDate;

    public Patient() {}

    public Patient(int id, String patientName, String diagnosis, Date reportDate) {
        this.id = id;
        this.patientName = patientName;
        this.diagnosis = diagnosis;
        this.reportDate = reportDate;
    }

    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }

    public String getDiagnosis() { return diagnosis; }
    public void setDiagnosis(String diagnosis) { this.diagnosis = diagnosis; }

    public Date getReportDate() { return reportDate; }
    public void setReportDate(Date reportDate) { this.reportDate = reportDate; }
}
