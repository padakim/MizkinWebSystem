package jp.co.mizkin.mizkinWebSystem.service;

import jp.co.mizkin.mizkinWebSystem.entity.User;
import jp.co.mizkin.mizkinWebSystem.payload.request.AdminRequestDTO;
import jp.co.mizkin.mizkinWebSystem.repository.AdminRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<User> getAllUsers() {
        return adminRepository.findAll();
    }

    public User getUserInfo(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    public User updateUser(Long id, AdminRequestDTO dto) {
        //implements other than role change - will implements later
        User user = dto.toEntity();
        User target = adminRepository.findById(id).orElse(null);

        log.info("user.toString: {}, target: {}", user.toString(), target);
        log.info("id:{}",id);
        log.info("getId:{}",user.getId());

        if(target == null || id!= user.getId()){
            log.info("Wrong request!! id: {},user: {}", id, user.toString());
            return null;
        }
        target.patch(user);
        User updated = adminRepository.save(target);
        return updated;
    }

    public User delete(Long id) {
        User target = adminRepository.findById(id).orElse(null);
        if(target == null){
            return null;
        }
        adminRepository.delete(target);
        return target;
    }
}
