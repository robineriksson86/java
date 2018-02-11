package hello;

import java.time.LocalDateTime;

/**
 * Created by Administrator on 2017-03-21.
 */
public class Time {
    private String timeStamp;

    public static String getTimeStamp () {

        LocalDateTime currentTime = LocalDateTime.now();
        String seconds = "" + currentTime.getSecond();
        if (seconds.length() < 2)   {
            seconds = "0"+seconds;
        }

        String hours = "" + currentTime.getHour();
        if (hours.length() < 2)   {
            hours = "0"+hours;
        }

        String minutes = "" +  currentTime.getMinute();
        if (minutes.length() < 2)   {
            minutes = "0"+minutes;
        }

        String timeStamp = hours + ":" + minutes + ":" + seconds + "  ";
        return timeStamp; //commentforgit
    }
}
