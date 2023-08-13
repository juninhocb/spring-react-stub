package com.example.carlosjr.bootforreact.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record UserDto(
        @NotBlank
        @Size(min = 3, max = 50)
        @Pattern(regexp = "^[a-zA-Z]+$", message = "Name should only contain letters")
        String name,
        @NotBlank
        @Size(min = 3, max = 50)
        String password) {
}
