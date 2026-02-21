package com.example.taskservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.taskservice.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
