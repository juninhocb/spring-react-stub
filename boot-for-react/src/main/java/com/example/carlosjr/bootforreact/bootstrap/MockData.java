package com.example.carlosjr.bootforreact.bootstrap;

import com.example.carlosjr.bootforreact.user.UserDto;
import com.example.carlosjr.bootforreact.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MockData implements CommandLineRunner {
    private final UserService userService;
    @Override
    public void run(String... args) throws Exception {

        UserDto userDto = UserDto.builder()
                .name("admin")
                .password("password")
                .build();
        userService.createNewUser(userDto);

    }
}
