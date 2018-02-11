
import com.googlecode.lanterna.terminal.Terminal;

import java.util.List;

public class StandardUI implements UI {

    private Terminal terminal;

    public StandardUI(Terminal terminal) {

        this.terminal = terminal;
    }

    @Override
    public void drawShapes(List<Shape> shapes)
    {
        for (Shape shape : shapes)
        {
            for (Point point : shape.draw())
            {
                terminal.moveCursor(point.x, point.y);
                terminal.putCharacter('O');
            }
        }

        terminal.moveCursor(0,0);
    }
}



