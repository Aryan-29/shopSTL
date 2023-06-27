package com.stlshop.ecommerce;

//import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

//import javax.management.relation.Role;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
//import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

    // @OneToOne(cascade = CascadeType.ALL)
    // private Profile profile;

    @Column(unique = true)
    @Email
    private String email;
    private String password;

    @Column
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Address> addresses;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return java.util.List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {

        return email;
    }

    @Override
    public boolean isAccountNonExpired() {

        return true;
    }

    @Override
    public boolean isAccountNonLocked() {

        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {

        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
        return true;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method
        // 'getPassword'");
        return password;
    }

    // public String getEmail() {
    // return email;
    // }

    // public void setEmail(String email) {
    // this.email = email;
    // }

    // public Profile getProfile() {
    // return profile;
    // }

    // public void setProfile(Profile profile) {
    // this.profile = profile;
    // }

}
