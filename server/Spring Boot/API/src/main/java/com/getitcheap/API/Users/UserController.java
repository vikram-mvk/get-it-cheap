package com.getitcheap.API.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(UserRoutes.SIGNIN)
    public ResponseEntity<?> signIn(@RequestBody UserEntity signInRequest) {
        return userService.signIn(signInRequest);
    }

    @PostMapping(UserRoutes.SIGNUP)
    public ResponseEntity<?> signUp(@RequestBody UserEntity signUpRequest) {
        return userService.signUp(signUpRequest);
    }

}
