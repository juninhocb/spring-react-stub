package com.example.carlosjr.bootforreact.exceptions;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record ExceptionResponseDto(String message,
                                   LocalDateTime timestamp,
                                   String path) {

}
