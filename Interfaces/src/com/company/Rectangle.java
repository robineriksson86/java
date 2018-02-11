
import java.util.ArrayList;
import java.util.List;

public class Rectangle implements Shape {

    Point start;
    Point end;

    public Rectangle (Point start, Point end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public List<Point> draw() {

        List<Point> points = new ArrayList<>();

        for(int x = start.x;x<=end.x;x++)
        {
            points.add(new Point(x,start.y));
            points.add(new Point(x,end.y));

        }

        for(int y = start.y;y<=end.y;y++)
        {
            points.add(new Point(start.x,y));
            points.add(new Point(end.x,y));
        }
        return points;
    }
}
