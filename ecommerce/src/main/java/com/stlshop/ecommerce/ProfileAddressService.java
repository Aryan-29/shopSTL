package com.stlshop.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProfileAddressService {

    @Autowired
    private ProfileRepository profileRepository;
    @Autowired
    private AddressRepository addressRepository;

    // public ProfileAddressService(ProfileRepository profileRepository,
    // AddressRepository addressRepository) {
    // this.profileRepository = profileRepository;
    // this.addressRepository = addressRepository;
    // }

    // public Profile saveProfile(Profile profile) {
    // // Address.addAddress(address);
    // Profile p = profileRepository.save(profile);
    // return p;
    // }

    public void saveProfile(Profile profile) {
        // Address.addAddress(address);
        // User user = profile.getUser(); // Get the associated User object
        // user.setProfile(profile);
        profileRepository.save(profile);

    }

    public void saveAddress(Address address) {
        // Address.addAddress(address);
        addressRepository.save(address);
    }
    // public Address saveAddress(Address address) {
    // // Address.addAddress(address);
    // Address a = addressRepository.save(address);
    // return a;
    // }

    // public void saveAddress(Address address) {
    // // Address.addAddress(address);
    // addressRepository.save(address);

    // }

}
