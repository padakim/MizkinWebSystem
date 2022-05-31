package jp.co.mizkin.mizkinWebSystem.dto;

import jp.co.mizkin.mizkinWebSystem.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;


@AllArgsConstructor
public class SignupDTO {

    @Column(name="email",unique = true)
    private String username;
    private String password;
    private String firstname;
    private String lastname;

    public User toEntity() {
        return new User(username,password,firstname,lastname );
    }
}
