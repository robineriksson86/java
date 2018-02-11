package com.company;

import java.util.ArrayList;
import java.util.List;

public class Logger {

    private List<String> logPosts = new ArrayList<>();

    public void log(String s) {
        logPosts.add(s);
    }

    public List<String> getLogPosts() {
        return logPosts;
    }
}
