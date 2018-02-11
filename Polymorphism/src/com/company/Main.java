
import com.googlecode.lanterna.*;
import com.googlecode.lanterna.input.Key;
import com.googlecode.lanterna.terminal.Terminal;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        // write your code here
        Terminal terminal = TerminalFacade.createTerminal(System.in, System.out, Charset.forName("UTF8"));
        terminal.enterPrivateMode();

        Player player = new Player(10,10);

        List<Enemy> enemies = new ArrayList<>();
        enemies.add(new FastEnemy(5,5));
        enemies.add(new FastEnemy(15,5));
        enemies.add(new SlowEnemy(5,15));
        enemies.add(new SlowEnemy(15,15));

        boolean gameOver = false;


        while(!gameOver){

            updateScreen(player, terminal, enemies);
            movePlayer(player, terminal);
            gameOver = gameLogic(player, enemies);
        }

        printText(5,5,"Game Over", terminal);
    }

    private static void printText(int x, int y, String message, Terminal terminal) {

        for (int i=0;i<message.length();i++)
        {
            terminal.moveCursor(x++, y);
            terminal.putCharacter(message.charAt(i));
        }
    }

    private static boolean gameLogic(Player player, List<Enemy> enemies) {

        for (Enemy enemy : enemies) {
            float speed = enemy.speed;

            if (enemy.x != player.x) {
                int dx = player.x - (int)enemy.x;
                enemy.x += (dx > 0 ? speed : -speed);
            }

            if (enemy.y != player.y) {
                int dy = player.y - (int)enemy.y;
                enemy.y += (dy > 0 ? speed : -speed);
            }

            //Game over?
            if ((int)enemy.x == player.x && (int)enemy.y == player.y)
                return true;
        }
        return false;
    }


    private static void updateScreen(Player player, Terminal terminal, List<Enemy> enemies) {

        terminal.clearScreen();
        terminal.moveCursor(player.x, player.y);
        terminal.putCharacter('O');

        for (Enemy enemy : enemies) {
            terminal.moveCursor((int)enemy.x, (int)enemy.y);
            terminal.putCharacter(enemy.displaychar);
        }

        terminal.moveCursor(0,0);

    }

    private static void movePlayer(Player player, Terminal terminal) throws InterruptedException {
        //Wait for a key to be pressed
        Key key;
        do{
            Thread.sleep(5);
            key =terminal.readInput();
        }
        while(key == null);

        switch(key.getKind())
        {
            case ArrowDown:
                player.y = (player.y<20) ? player.y+2 : 20;
                break;
            case ArrowUp:
                player.y = (player.y>0) ? player.y-2 : 0;
                break;
            case ArrowLeft:
                player.x = (player.x>0) ? player.x-2 : 0;
                break;
            case ArrowRight:
                player.x = (player.x<20) ? player.x+2 : 20;
                break;
        }
        System.out.println(key.getCharacter()+ " " + key.getKind());
    }
}

