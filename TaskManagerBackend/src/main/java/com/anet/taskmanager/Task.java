package com.anet.taskmanager;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String category;
    private LocalDate deadline;
    private boolean completed;
    private String description;

public String getDescription() {
    return description;
}

public void setDescription(String description) {
    this.description = description;
}


    public Task() {}

    public Task(Long id, String title, String category, LocalDate deadline, boolean completed) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.deadline = deadline;
        this.completed = completed;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getCategory() { return category; }
    public LocalDate getDeadline() { return deadline; }
    public boolean isCompleted() { return completed; }

    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setCategory(String category) { this.category = category; }
    public void setDeadline(LocalDate deadline) { this.deadline = deadline; }
    public void setCompleted(boolean completed) { this.completed = completed; }
}
