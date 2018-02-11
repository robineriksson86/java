package com.company;

import com.googlecode.lanterna.*;
import com.googlecode.lanterna.input.Key;
import com.googlecode.lanterna.terminal.Terminal;

import java.nio.charset.Charset;

public class Main {

    public static void main(String[] args) throws InterruptedException {
	// write your code here

        Terminal terminal = TerminalFacade.createTerminal(System.in, System.out, Charset.forName("UTF8"));
        terminal.enterPrivateMode();

        Player player = new Player(10,10);
        Enemy enemy = new Enemy(5,5);
        boolean gameOver = false;

        while(!gameOver){

            updateScreen(player, terminal, enemy);
            movePlayer(player, terminal);
            gameOver = gameLogic(player, enemy);
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

    private static boolean gameLogic(Player player, Enemy enemy) {

        if(enemy.x != player.x)
        {
            int dx = player.x - enemy.x;
            enemy.x += (dx>0 ? 1 : -1);
        }

        if(enemy.y != player.y)
        {
            int dy = player.y - enemy.y;
            enemy.y += (dy>0 ? 1 : -1);
        }

        //Game over?
        if(enemy.x == player.x && enemy.y == player.y)
            return true;
        else
            return false;
    }

    private static void updateScreen(Player player, Terminal terminal, Enemy enemy) {

        terminal.clearScreen();
        terminal.moveCursor(player.x, player.y);
        terminal.putCharacter('\u263b');
        terminal.moveCursor(enemy.x, enemy.y);

        terminal.putCharacter('X');

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
                player.y = (player.y<20) ? player.y+1 : 20;
                break;
            case ArrowUp:
                player.y = (player.y>0) ? player.y-1 : 0;
                break;
            case ArrowLeft:
                player.x = (player.x>0) ? player.x-1 : 0;
                break;
            case ArrowRight:
                player.x = (player.x<20) ? player.x+1 : 20;
                break;
        }
        System.out.println(key.getCharacter()+ " " + key.getKind());
    }
}

