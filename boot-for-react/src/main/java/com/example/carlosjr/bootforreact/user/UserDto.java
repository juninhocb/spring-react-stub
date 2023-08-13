package com.example.carlosjr.bootforreact.user;

import lombok.Builder;

@Builder
public record UserDto(String name, String password) {
}
