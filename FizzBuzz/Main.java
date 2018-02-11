package FizzBuzz;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        boolean running = true;

        Scanner scanner = new Scanner(System.in);

        while(running) {
            System.out.println("Enter a number to calculate fizzbuzz, or q to exit.");
            String input = scanner.next();
            if(input.equalsIgnoreCase("q"))
                return;
            String result = CalculateFizzbuzz(Integer.parseInt(input));
            System.out.println(result);
        }

    }

    /**
     * Should return Fizz if number is dividable by 3
     * Should return Buzz if number is dividable by 5
     * Should return FizzBuzz if number is dividable by 3 and 5
     * @param input
     */
    public static String CalculateFizzbuzz(int input) {
        if(input %3 == 0 && input %5 == 0) {
            return "FizzBuzz";
        }
        String result = "";
        if(input % 3 == 0) {
            return "Fizz";
        }
        if(input % 5 == 0 ) {
            return "Buzz";
        }

        return result;
    }
}
