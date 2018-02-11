package com.example.Domain;

/**
 * Created by Administrator on 2017-03-23.
 */
public class User {
 public final int id;
 public final String firstname;
 public final String lastname;
 public final int points;
 public final String username;
 public final String password;

    public User(int id, String firstname, String lastname, int points, String username, String password) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.points = points;
        this.username = username;
        this.password = password;
    }
}
