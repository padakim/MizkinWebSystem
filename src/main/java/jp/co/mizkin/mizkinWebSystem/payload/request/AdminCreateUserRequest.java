package jp.co.mizkin.mizkinWebSystem.payload.request;



import jp.co.mizkin.mizkinWebSystem.entity.User;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

public class AdminCreateUserRequest {

    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    private Set<String> role;

    @NotBlank
    @Size(min = 4, max = 40)
    private String password;
    private String tel="";
    private String address="";

    public static Builder {

        private String username;
        private String password;


        public Builder(String username, String email, String password){
            this.username = username;
            this.email = email;
            this.password = password;
        }
    }

}
