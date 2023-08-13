package com.example.carlosjr.bootforreact.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(String resource) {
        super( String.format("The resource %s was not found ", resource));
    }
}
