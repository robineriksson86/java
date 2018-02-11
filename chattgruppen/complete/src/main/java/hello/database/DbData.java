package hello.database;

import org.springframework.beans.factory.annotation.Autowired;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.ConcurrentModificationException;
import java.util.HashMap;

/**
 * Created by Administrator on 2017-03-23.
 */
public class DbData {
    DataSource dataSource;

    public DbData(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public boolean checkLogin(String username, String password) {
        // TODO: MAKE THIS BETTER
        String stmt = "SELECT password FROM chat.[user] WHERE username = ?";
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement sth = connection.prepareStatement(stmt);
            sth.setString(1, username);
            ResultSet results = sth.executeQuery();
            results.next();
            String correctPassword = results.getString(1);

            if(correctPassword.equals(password)) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
    }

    public String test(String username, String password) {
        String tableName = "Chat.[User]";
        String keyId = "ID";
        String keyUsername = "Username";
        String keyPassword = "Password";

        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(
                     "SELECT username, password FROM chat.[user]"
             )) {

            HashMap<String, String> map = new HashMap<>();
            while(rs.next()) {
                map.put(rs.getString(1), rs.getString(2));
            }

            return "Database: " + map.toString();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return "temp";
    }
}
