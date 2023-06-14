package com.stlshop.ecommerce;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password should have minimum 8 characters")
    private String password;
}
