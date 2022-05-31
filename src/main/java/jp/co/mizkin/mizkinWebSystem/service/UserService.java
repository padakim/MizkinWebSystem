package jp.co.mizkin.mizkinWebSystem.service;

import jp.co.mizkin.mizkinWebSystem.dto.SignupDTO;
import jp.co.mizkin.mizkinWebSystem.entity.User;
import jp.co.mizkin.mizkinWebSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createAccount(SignupDTO dto) {
        User user = dto.toEntity();
        return userRepository.save(user);
    }
}
