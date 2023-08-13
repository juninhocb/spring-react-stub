package com.example.carlosjr.bootforreact.user;

import com.example.carlosjr.bootforreact.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    @Override
    public UserDto findUserById(Integer id) {
        return userMapper.entityToDto(handleFind(id));
    }

    @Override
    public UserDto findUserByName(String name) {
        return userMapper.entityToDto(handleFind(name));
    }

    @Override
    public Set<UserDto> findAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::entityToDto)
                .collect(Collectors.toSet());
    }

    @Override
    public Integer createNewUser(UserDto userDto) {
        User persistedUser = userRepository
                .save(userMapper.dtoToEntity(userDto));
        return persistedUser.getId();
    }

    @Override
    public void updateUser(UserDto userDto) {
        User persistedUser = handleFind(userDto.name());
        persistedUser.setPassword(userDto.password());
        userRepository.save(persistedUser);
    }

    @Override
    public void deleteUser(String name) {
        User persistedUser = handleFind(name);
        userRepository.delete(persistedUser);
    }

    @Override
    public Boolean validateAnUser(UserDto userDto) {
        User persistedUser = handleFind(userDto.name());
        return userDto.password().equals(persistedUser.getPassword());
    }

    private User handleFind(Object key){

        Optional<User> userOpt = null;

        if (key instanceof Integer){
            userOpt = userRepository.findById((Integer) key);
        }

        if (key instanceof String){
            userOpt = userRepository.findByName(key.toString());
        }

        if (userOpt.isEmpty()){
            throw new ResourceNotFoundException(key.toString());
        }

        return userOpt.get();

    }
}
