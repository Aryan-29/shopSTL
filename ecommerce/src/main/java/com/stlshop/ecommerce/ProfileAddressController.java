package com.stlshop.ecommerce;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileAddressController {

    @Autowired
    private ProfileAddressService profileAddressService;

    // @Autowired
    // public ProfileAddressController(ProfileAddressService profileAddressService)
    // {
    // this.profileAddressService = profileAddressService;
    // }

    // @PostMapping
    // public ResponseEntity<String> createProfileWithAddress(@RequestBody
    // ProfileAddressRequest request) {
    // profileAddressService.saveProfileWithAddress(request.getProfile(),
    // request.getAddress());
    // return new ResponseEntity<>("Profile created with address",
    // HttpStatus.CREATED);
    // // return ResponseEntity.ok("Working");
    // }
    @Autowired
    private UserRepository userRepository;
    String userEmail;

    @PostMapping
    public ResponseEntity<String> addProfile(@RequestBody Profile profile, @RequestHeader HttpHeaders header) {
        System.out.println("Get Token start!");
        userEmail = JwtService.getUserIdByToken(header,
                "0a163b4e07c2a2f5c35ff7023ccc8c673092e4a705c748e2c126fda9514c3684");
        // return ResponseEntity.status(HttpStatus.OK).body(userEmail);

        Optional<User> user = userRepository.findByEmail(userEmail);
        // Optional<User> user = userRepository.findByEmail(profile.getEmail());

        if (!user.isPresent()) {
            throw new RuntimeException("User not found");
        }

        // Set the user on the profile
        profile.setUser(user.get());

        // Save the profile
        profileAddressService.saveProfile(profile);
        // profileRepository.save(profile);

        // Return a success response
        return ResponseEntity.ok("Profile created");

    }

    @PostMapping("/address")
    public ResponseEntity<String> addAddress(@RequestBody Address address, @RequestHeader HttpHeaders header) {
        System.out.println("Get Token start!");
        userEmail = JwtService.getUserIdByToken(header,
                "0a163b4e07c2a2f5c35ff7023ccc8c673092e4a705c748e2c126fda9514c3684");
        // return ResponseEntity.status(HttpStatus.OK).body(userEmail);

        Optional<User> user = userRepository.findByEmail(userEmail);
        // Optional<User> user = userRepository.findByEmail(profile.getEmail());

        if (!user.isPresent()) {
            throw new RuntimeException("User not found");
        }

        // Set the user on the profile
        address.setUser(user.get());

        // Save the profile
        profileAddressService.saveAddress(address);
        // profileRepository.save(profile);

        // Return a success response
        return ResponseEntity.ok("Address Added");

    }

    @GetMapping
    public ResponseEntity<String> sayHelloProfile() {
        return ResponseEntity.ok("Hello from profile endpooint");
    }
}
