package com.example.Repository;

import com.example.Domain.User;

/**
 * Created by Administrator on 2017-03-23.
 */
public interface RepositoryInterface {
    User getUser(String username, String password);

    void addPoints(int quizzedcompleted, int id) throws Exception;
}