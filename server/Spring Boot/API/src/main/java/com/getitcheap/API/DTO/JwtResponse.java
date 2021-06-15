package com.getitcheap.API.DTO;

public class JwtResponse {

    private String jwt;

    private Long userId;

    private String userName;

    private String email;

    public JwtResponse(String jwt, Long userId, String userName, String email) {
        this.jwt = jwt;
        this.userId = userId;
        this.userName = userName;
        this.email = email;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
