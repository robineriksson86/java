package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here

        Tire[] tires= new Tire[4];
        Door[] doors= new Door[4];

        tires[0] = new Tire(100);
        tires[1] = new Tire(100);
        tires[2] = new Tire(100);
        tires[3] = new Tire(100);

        doors[0] = new Door(150);
        doors[1] = new Door(150);
        doors[2] = new Door(150);
        doors[3] = new Door(150);

        Car car = new Car(1000,tires, doors);

        System.out.println("Total car weight " + car.getWeight());
    }
}



