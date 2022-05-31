package jp.co.mizkin.mizkinWebSystem.repository;

import jp.co.mizkin.mizkinWebSystem.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
