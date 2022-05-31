package jp.co.mizkin.mizkinWebSystem.controller;


import jp.co.mizkin.mizkinWebSystem.dto.SignupDTO;
import jp.co.mizkin.mizkinWebSystem.entity.User;
import jp.co.mizkin.mizkinWebSystem.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/test")
    public String hello() {
        return "hello world";
    }
    @PostMapping("/signup")
    public ResponseEntity<User>createAccount(@RequestBody SignupDTO dto){
        log.info(dto.toString());
        User created = userService.createAccount(dto);
        return (created != null) ? ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
