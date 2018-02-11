package hello.database;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;

/**
 * Created by admin on 22/03/17.
 */
@Controller
public class DbTest {

    @Autowired
    DataSource dataSource;

    @RequestMapping(value = "/dbtest", produces = "text/plain")
    @ResponseBody
    public String testDb() throws SQLException {
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT 1+1")) {
            rs.next();
            int two = rs.getInt(1);
            return "Database connectivity seems " + (two == 2 ? "OK." : "weird!");
        }
    }

    @RequestMapping(value = "/dbtestreal", produces = "text/plain")
    @ResponseBody
    public String testRealDB() throws SQLException {
        String tableName = "Chat.[User]";
        String keyId = "ID";
        String keyUsername = "Username";
        String keyPassword = "Password";

        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             // SELECT roomid, name FROM room
             // SELECT 1+1
             ResultSet rs = stmt.executeQuery(
                     "SELECT username, password FROM chat.[user]"
             )) {

            HashMap<String, String> map = new HashMap<>();
            while(rs.next()) {
                map.put(rs.getString(1), rs.getString(2));
            }

            return "Database: " + map.toString();
        }
    }
}
