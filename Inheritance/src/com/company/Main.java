
import com.googlecode.lanterna.*;
import com.googlecode.lanterna.input.Key;
import com.googlecode.lanterna.terminal.Terminal;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {

    public static void main(String[] args) throws InterruptedException {
	// write your code here

        Terminal terminal = TerminalFacade.createTerminal(System.in, System.out, Charset.forName("UTF8"));
        terminal.enterPrivateMode();

        List<Flake> flakes = new ArrayList<>();

        while (true)
        {
            addRandomFlakes(flakes);
            moveFlakes(flakes);
            printFlakes(flakes, terminal);
            waitForKeyPress(terminal);
        }
    }

    private static void printFlakes(List<Flake> flakes, Terminal terminal) {

        terminal.clearScreen();

        terminal.clearScreen();

        for (Flake flake : flakes) {
            terminal.moveCursor(flake.x, 21-flake.y);
            terminal.putCharacter('O');
        }

        terminal.moveCursor(0,0);

    }

    private static void moveFlakes(List<Flake> flakes) {
        Random rnd = new Random();

        for(Flake flake : flakes)
        {
            if (flake.y > 0)
                if (rnd.nextInt(10) <= 4)
                {
                    if(flakeAtPosition(flakes,flake.x, flake.y-1) == false)
                        flake.y = flake.y - 1;
                }
        }
    }

    private static boolean flakeAtPosition(List<Flake> flakes, int x, int y) {

        for(Flake flake : flakes)
        {
            if(flake.x == x && flake.y == y)
                return true;
        }
        return false;
    }

    private static void addRandomFlakes(List<Flake> flakes) {

        Random rnd = new Random();
        if(rnd.nextInt(10)<=4)
            flakes.add(new Flake(rnd.nextInt(40), 20));
    }

    private static void waitForKeyPress(Terminal terminal) throws InterruptedException {

        Key key;
        do{
            Thread.sleep(5);
            key =terminal.readInput();
        }
        while(key == null);

    }
}


