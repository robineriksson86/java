

import java.util.ArrayList;
import java.util.List;

public class FilledRectangle implements Shape {

    Point start;
    Point end;

    public FilledRectangle (Point start, Point end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public List<Point> draw() {

        List<Point> points = new ArrayList<>();

        for(int y = start.y;y<end.y;y++) {
            for (int x = start.x; x < end.x; x++) {
                points.add(new Point(x,y));
            }
        }
        return points;
    }


}
