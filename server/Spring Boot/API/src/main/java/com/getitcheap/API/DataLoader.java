package com.getitcheap.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.nio.file.Files;

@Component
class DataLoader implements ApplicationRunner {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        try {
            Resource database =  new ClassPathResource("/Database/create.sql");
            String fileContents = Files.readString(database.getFile().toPath());
            for (String query : fileContents.split(";")) {
                jdbcTemplate.execute(query);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}