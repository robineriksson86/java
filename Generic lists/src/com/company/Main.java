package com.company;

public class Main {

    public static void main(String[] args) {
        Logger myLogger = new Logger();
        myLogger.log("First post");
        myLogger.log("Second post");
        for (String item : myLogger.getLogPosts()) {
            System.out.println(item);
        }
    }

}
