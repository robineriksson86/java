package FizzBuzz;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Niklas on 2017-02-20.
 */
public class FizzBuzzTest {

    @Test
    public void ShouldReturnFizz() {
        Assert.assertEquals(Main.CalculateFizzbuzz(3),"Fizz");
    }


    @Test
    public void ShouldReturnBuzz() {
        Assert.assertEquals(Main.CalculateFizzbuzz(5),"Buzz");
    }

    @Test
    public void ShouldReturnFizzBuzz() {
        Assert.assertEquals(Main.CalculateFizzbuzz(15),"FizzBuzz");
    }

}


