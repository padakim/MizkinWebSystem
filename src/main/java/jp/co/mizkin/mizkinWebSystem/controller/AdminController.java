package jp.co.mizkin.mizkinWebSystem.controller;

import jp.co.mizkin.mizkinWebSystem.entity.ERole;
import jp.co.mizkin.mizkinWebSystem.entity.Role;
import jp.co.mizkin.mizkinWebSystem.entity.User;
import jp.co.mizkin.mizkinWebSystem.payload.request.AdminRequestDTO;

import jp.co.mizkin.mizkinWebSystem.payload.response.MessageResponse;
import jp.co.mizkin.mizkinWebSystem.repository.RoleRepository;
import jp.co.mizkin.mizkinWebSystem.repository.UserRepository;
import jp.co.mizkin.mizkinWebSystem.service.AdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/")
    public String home(){
        return "this is admin dashboard";
    }

 // handling on the frontend url /profile
//    @GetMapping("/me")
//    public String getMyInfo(){
//        return "this is my info";
//    }

    @PostMapping("/create")
    public ResponseEntity<?> createUserByAdmin(@Valid @RequestBody AdminRequestDTO dto) {
        if (userRepository.existsByUsername(dto.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(dto.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(dto.getUsername(),
                dto.getEmail(),
                encoder.encode(dto.getPassword()),
                dto.getTel(),dto.getAddress());

        Set<String> strRoles = dto.getRole();

        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return adminService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserInfo(@PathVariable Long id){
        return adminService.getUserInfo(id);
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody AdminRequestDTO dto){
        if (userRepository.existsByUsername(dto.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }
        if (userRepository.existsByEmail(dto.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }
        User updated = adminService.updateUser(id,dto);
        return (updated != null) ? ResponseEntity.status(HttpStatus.OK).body(updated):ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        User deleted = adminService.delete(id);
        return (deleted != null)? ResponseEntity.status(HttpStatus.NO_CONTENT).build():ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
