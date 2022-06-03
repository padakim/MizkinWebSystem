package jp.co.mizkin.mizkinWebSystem.repository;

import jp.co.mizkin.mizkinWebSystem.entity.ERole;
import jp.co.mizkin.mizkinWebSystem.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
