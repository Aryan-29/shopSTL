package com.stlshop.ecommerce;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @NotNull
    private User user;
    // @Column(name = "user_id")
    // private Integer user_id;

    // @Column(name = "email")
    // private String email;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    // Getters and setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
        // user.setProfile(this);
    }

    // public Integer getUser_id() {
    // return user_id;
    // }

    // public void setUser_id(Integer user_id) {
    // this.user_id = user_id;
    // }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    // public String getEmail() {
    // return email;
    // }

    // public void setEmail(String email) {
    // this.email = email;
    // }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
