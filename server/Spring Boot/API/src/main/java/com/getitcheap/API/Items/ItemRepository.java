package com.getitcheap.API.Items;
;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ItemRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    ItemEntity itemEntity;

    private final Logger logger = LoggerFactory.getLogger(ItemRepository.class);

    List<ItemEntity> getAllItems() {
        try {
            String sql = "SELECT * FROM items WHERE active = 1";
            return jdbcTemplate.query(sql, itemEntity.getRowMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        } catch (Exception e) {
            logger.error( "Error in getAllItems()\n" + e.getMessage());
            return null;
        }
    }

    List<ItemEntity> getItemsOfThisUser(String username) {
        try {
            String sql = "SELECT * FROM items WHERE username = ? AND active = 1";
            return jdbcTemplate.query(sql, itemEntity.getRowMapper(), username);
        } catch (EmptyResultDataAccessException e) {
            return null;
        } catch (Exception e) {
            logger.error( "Error in getItemsOfThisUser()\n" + e.getMessage());
            return null;
        }
    }

    ItemEntity getItem(Long id) {
        try {
            String sql = "SELECT * FROM items WHERE id = ? AND active = 1";
            return jdbcTemplate.queryForObject(sql, itemEntity.getRowMapper(), id);
        } catch (EmptyResultDataAccessException e) {
            return null;
        } catch (Exception e) {
            logger.error( "Error in getItem()\n" + e.getMessage());
            return null;
        }
    }

    boolean newItem(ItemEntity item) {
        try {
            String sql = "INSERT INTO items VALUES(DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, 1)";
            return jdbcTemplate.update(sql,
                    item.getTitle(), item.getDescription(), item.getCategory(), item.getType(), item.getImage(),
                    item.getPrice(), item.getUsername(), item.getContact()) > 0;
        } catch (EmptyResultDataAccessException e) {
            return false;
        } catch (Exception e) {
            logger.error( "Error in newItem()\n" + e.getMessage());
            return false;
        }
    }

}
