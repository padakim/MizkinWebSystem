package jp.co.mizkin.mizkinWebSystem.payload.request;


import jp.co.mizkin.mizkinWebSystem.entity.Role;
import jp.co.mizkin.mizkinWebSystem.entity.User;
import lombok.AllArgsConstructor;
import lombok.ToString;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@AllArgsConstructor
@ToString
public class AdminRequestDTO {

    private Long id;
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
    private String address;
    private String tel;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getRole() {
        return this.role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getTel() {
        return tel;
    }

    public User toEntity(){
        return new User( id, username,  email,  password,  address,  tel);
    }

// made by builder pattern/ has some problem on adding role
//    @NotBlank
//    @Size(min = 3, max = 20)
//    private final String username;
//    @NotBlank
//    @Size(max = 50)
//    @Email
//    private final String email;
//    private final Set<String> role;
//    @NotBlank
//    @Size(min = 4, max = 40)
//    private final String password;
//    private final String tel;
//    private final String address;
//
//    public static class Builder {
//        // Required parameters
//        private String username;
//        private String password;
//        private String email;
//        private Set<String> role;
//        // Optional parameters - initialized to default values
//        private String tel="";
//        private String address="";
//        public Builder(String username, String email, String password, Set<String> role){
//            this.username = username;
//            this.email = email;
//            this.password = password;
//            this.role = role;
//        }
//        public Builder tel(String val){
//            tel = val;
//            return this;
//        }
//        public Builder address(String val){
//            address = val;
//            return this;
//        }
//        public AdminCreateUserRequest build(){
//            return new AdminCreateUserRequest(this);
//        }
//    }
//        private AdminCreateUserRequest(Builder builder){
//            username = builder.username;
//            email = builder.email;
//            password = builder.password;
//            role = builder.role;
//            tel = builder.tel;
//            address = builder.address;
//    }
}