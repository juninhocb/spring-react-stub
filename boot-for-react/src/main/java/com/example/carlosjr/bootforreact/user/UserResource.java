package com.example.carlosjr.bootforreact.user;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor

public class UserResource {

    private final UserService userService;
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "userId") Integer id){
        return ResponseEntity.ok().body(userService.findUserById(id));
    }
    @PostMapping("/login")
    public ResponseEntity<Void> getUserAuth(@RequestBody UserDto userDto){
        if (userService.validateAnUser(userDto)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
    @PostMapping
    public ResponseEntity<Void> createAnUser(@RequestBody @Valid UserDto userDto,
                                             UriComponentsBuilder ucb){

        Integer persistedUserId = userService.createNewUser(userDto);
        URI uri = ucb
                .path("/api/v1/user/{userId}")
                .buildAndExpand(persistedUserId)
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
