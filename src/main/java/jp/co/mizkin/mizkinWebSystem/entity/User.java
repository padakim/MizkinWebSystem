package jp.co.mizkin.mizkinWebSystem.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter

public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String firstname;

    @Column
    private String lastname;

    public User(String username, String password, String firstname, String lastname) {
    this.username=username;
    this.password=password;
    this.firstname=firstname;
    this.lastname=lastname;
    }
}
