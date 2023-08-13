package com.example.carlosjr.bootforreact.user;

import jakarta.validation.constraints.*;
import lombok.Builder;

@Builder
public record UserDto(
        @Null
        Integer id,
        @NotBlank
        @Size(min = 3, max = 50)
        @Pattern(regexp = "^[a-zA-Z ]+$", message = "Name should only contain letters")
        String name,
        @NotBlank
        @Size(min = 3, max = 50)
        String password,
        @NotNull
        @Positive
        Integer age) {
}
