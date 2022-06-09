package jp.co.mizkin.mizkinWebSystem.controller;


import jp.co.mizkin.mizkinWebSystem.entity.Role;
import jp.co.mizkin.mizkinWebSystem.entity.User;
import jp.co.mizkin.mizkinWebSystem.payload.request.AdminCreateUserRequest;
import jp.co.mizkin.mizkinWebSystem.payload.request.SignupRequest;
import jp.co.mizkin.mizkinWebSystem.payload.response.MessageResponse;
import jp.co.mizkin.mizkinWebSystem.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/")
    public String home(){
        return "this is admin home";
    }

    @GetMapping("/me")
    public String getMyInfo(){
        return "this is my info";
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getTel(),signUpRequest.getAddress());

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();
        log.info("strRoles: {}, roles: {}", strRoles, roles);

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User added successfully!"));
    }


    @GetMapping("/users")
    public String getAllUsers(){
        return "this is users list";
    }

    @GetMapping("/users/{id}")
    public String getUserInfo(@PathVariable Long id){
        return "this is a user info"+id;
    }

    @PatchMapping("/users/{id}")
    public String updateUser(@PathVariable Long id){
        return "this is patch user"+id;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id){
        return "this will delete user"+id;
    }
}
