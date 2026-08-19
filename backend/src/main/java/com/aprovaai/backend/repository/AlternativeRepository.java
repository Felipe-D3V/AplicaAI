package com.aprovaai.backend.repository;

import com.aprovaai.backend.entity.Alternative;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlternativeRepository extends JpaRepository<Alternative, Long> {
    
}
