package com.example.carlosjr.bootforreact.user;

import java.util.List;
import java.util.Set;

public interface UserService {

    UserDto findUserById(Integer id);
    UserDto findUserByName(String name);
    Set<UserDto> findAllUsers();
    Integer createNewUser(UserDto userDto);
    void updateUser(UserDto userDto);
    void deleteUser(String name);
    Boolean validateAnUser(UserDto userDto);

}
