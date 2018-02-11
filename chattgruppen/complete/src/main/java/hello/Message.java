package hello;

public class Message {

    private String name;

    public Message() {
    }

    public Message(String name) {
        this.name = name;
    }

    public String getMessage() {
        return name;
    }

    public void setMessage(String name) {
        this.name = name;
    }
}