package com.getitcheap.API.Items;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class ItemEntity {

    private Long id;

    private String itemName;

    private String description;

    private String category;

    private String itemType;

    private String image;

    private String price;

    private String rentalBasis;

    private Long userId;

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

    public String getItemName() {
        return itemName;
    }

    public ItemEntity setItemName(String itemName) {
        this.itemName = itemName;
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

    public String getItemType() {
        return itemType;
    }

    public ItemEntity setItemType(String itemType) {
        this.itemType = itemType;
        return this;
    }

    public String getRentalBasis() {
        return rentalBasis;
    }

    public ItemEntity setRentalBasis(String rentalBasis) {
        this.rentalBasis = rentalBasis;
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

    public Long getUserId() {
        return userId;
    }

    public ItemEntity setUserId(Long userId) {
        this.userId = userId;
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
        return new RowMapper<ItemEntity>() { // Always ensure that the Row Mapper and ItemEntity variables names match

            @Override
            public ItemEntity mapRow(ResultSet rs, int i) throws SQLException {
                ItemEntity item = new ItemEntity();
                item
                        .setId(rs.getLong("id"))
                        .setItemName(rs.getString("itemName"))
                        .setDescription(rs.getString("description"))
                        .setCategory(rs.getString("category"))
                        .setItemType(rs.getString("itemType"))
                        .setImage(rs.getString("image"))
                        .setPrice(rs.getString("price"))
                        .setRentalBasis(rs.getString("rentalBasis"))
                        .setUserId(rs.getLong("userId"))
                        .setUsername(rs.getString("username"))
                        .setContact(rs.getString("contact"))
                        .setActive(rs.getInt("active"));

                return item;
            }
        };
    }

}
