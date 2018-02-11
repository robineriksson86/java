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

        while(true){

            movePlayer(player, terminal);

            updateScreen(player, terminal);
        }
    }

    private static void updateScreen(Player player, Terminal terminal) {

        terminal.clearScreen();
        terminal.moveCursor(player.x, player.y);
        terminal.putCharacter('O');

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
