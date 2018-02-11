
import com.googlecode.lanterna.terminal.Terminal;

import java.util.List;

public class ZoomedUI implements UI {

    private Terminal terminal;

    public ZoomedUI(Terminal terminal) {

        this.terminal = terminal;
    }

    @Override
    public void drawShapes(List<Shape> shapes)
    {
        for (Shape shape : shapes)
        {
            for (Point point : shape.draw())
            {
                int x = point.x*2;
                int y = point.y*2;
                terminal.moveCursor(x, y);
                terminal.putCharacter('O');
                terminal.moveCursor(x+1, y);
                terminal.putCharacter('O');
                terminal.moveCursor(x, y+1);
                terminal.putCharacter('O');
                terminal.moveCursor(x+1, y+1);
                terminal.putCharacter('O');
            }
        }

        terminal.moveCursor(0,0);
    }
}
