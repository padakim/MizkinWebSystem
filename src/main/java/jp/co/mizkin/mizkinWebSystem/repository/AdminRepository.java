package jp.co.mizkin.mizkinWebSystem.repository;

import jp.co.mizkin.mizkinWebSystem.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface AdminRepository extends CrudRepository<User, Long> {

    @Override
    ArrayList<User> findAll();

}
