package com.company;

public class Car {
    private Tire[] tires;
    private Door[] doors;
    private float weight;

    public Car (float weight, Tire[] tires, Door[] doors) {
        this.weight = weight;
        this.tires = tires;
        this.doors = doors;
    }

    public float getWeight()
    {
        float totalweight = weight;

        for(Tire tire : tires)
            totalweight = totalweight + tire.getWeight();

        for(Door door : doors)
            totalweight = totalweight + door.getWeight();

        return totalweight;
    }
}
