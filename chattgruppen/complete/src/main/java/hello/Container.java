package hello;

public class Container {
    public static final int USER_MESSAGE = 0;
    public static final int USER_LIST = 1;
    public static final int USER_LOGGED_IN = 2;

    private int type;
    private String content;

    public Container() {
    }

    public Container(int type, String content) {
        this.type = type;
        this.content = content;
    }

    public int getType() {
        return type;
    }

    public String getContent() {
        return content;
    }

}