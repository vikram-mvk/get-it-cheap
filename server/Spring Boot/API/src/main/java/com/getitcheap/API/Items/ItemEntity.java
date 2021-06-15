package com.getitcheap.API.Items;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class ItemEntity {

    private Long id;

    private String title;

    private String description;

    private String category;

    private int type;

    private String image;

    private String price;

    private Long creator;

    private String contact;

    private int active;

    private String username;

    public Long getId() {
        return id;
    }

    public ItemEntity setId(Long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public ItemEntity setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public ItemEntity setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getCategory() {
        return category;
    }

    public ItemEntity setCategory(String category) {
        this.category = category;
        return this;
    }

    public int getType() {
        return type;
    }

    public ItemEntity setType(int type) {
        this.type = type;
        return this;
    }

    public String getImage() {
        return image;
    }

    public ItemEntity setImage(String image) {
        this.image = image;
        return this;
    }

    public String getPrice() {
        return price;
    }

    public ItemEntity setPrice(String price) {
        this.price = price;
        return this;
    }

    public Long getCreator() {
        return creator;
    }

    public ItemEntity setCreator(Long creator) {
        this.creator = creator;
        return this;
    }

    public String getContact() {
        return contact;
    }

    public ItemEntity setContact(String contact) {
        this.contact = contact;
        return this;
    }

    public int getActive() {
        return active;
    }

    public String getUsername() {
        return this.username;
    }

    public ItemEntity setUsername(String username) {
        this.username = username;
        return this;
    }

    @JsonIgnore
    public ItemEntity setActive(int active) {
        this.active = active;
        return this;
    }

    @JsonIgnore
    public RowMapper<ItemEntity> getRowMapper() {
        return new RowMapper<ItemEntity>() {

            @Override
            public ItemEntity mapRow(ResultSet rs, int i) throws SQLException {
                ItemEntity item = new ItemEntity();
                item
                        .setId(rs.getLong("id"))
                        .setTitle(rs.getString("title"))
                        .setDescription(rs.getString("description"))
                        .setCategory(rs.getString("category"))
                        .setType(rs.getInt("type"))
                        .setImage(rs.getString("image"))
                        .setPrice(rs.getString("price"))
                        .setUsername(rs.getString("username"))
                        .setContact(rs.getString("contact"))
                        .setActive(rs.getInt("active"));

                return item;
            }
        };
    }

}
