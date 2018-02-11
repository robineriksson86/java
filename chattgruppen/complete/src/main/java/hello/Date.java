package hello;

import java.time.LocalDateTime;

public class Date {
    LocalDateTime currentdate;

    public static LocalDateTime getDate(){
        LocalDateTime currentDate = LocalDateTime.now();
        return currentDate;  //commentforgit
    }
}
