package com.getitcheap.API.Users;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

@Component
public class UserEntity implements UserDetails {

    private Long id;

    private String email;

    private String username;

    private String password;

    private int active = 1;

    public Long getId() {
        return id;
    }

    public UserEntity setId(long id) {
        this.id = id;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserEntity setEmail(String email) {
        this.email = email;
        return this;
    }

    public UserEntity setUsername(String username) {
        this.username = username;
        return this;
    }

    public UserEntity setPassword(String password) {
        this.password = password;
        return this;
    }

    public int getActive() {
        return active;
    }

    public UserEntity setActive(int active) {
        this.active = active;
        return this;
    }


    // Below methods are needed by Spring Security to perform Authentication

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return getActive() == 1;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return new ArrayList<SimpleGrantedAuthority>() {
            { new SimpleGrantedAuthority("USER"); }
        };
    }

    public RowMapper<UserEntity> getRowMapper() {
        return new RowMapper<UserEntity>() {

            @Override
            public UserEntity mapRow(ResultSet rs, int i) throws SQLException {
                UserEntity user = new UserEntity();
                user
                    .setId(rs.getLong("id"))
                    .setUsername(rs.getString("username"))
                    .setPassword(rs.getString("password"))
                    .setActive(rs.getInt("active"))
                    .setEmail(rs.getString("email"));

                return user;
            }
        };
    }

}



