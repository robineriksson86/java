package com.example.Repository;

import com.example.RepositoryException;
import com.example.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Administrator on 2017-03-23.
 */
@Component
public class Repository implements RepositoryInterface{

    @Autowired
    DataSource dataSource;

    public User getUser (String username, String password) {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM [dbo].[user] WHERE Username = ? AND Password = ?")) {
            ps.setString(1, username);
            ps.setString(2, password);
            User user = null;
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next())
                    user = rsUser(rs);
            }
            return user;
        } catch (SQLException e) {
            throw new RepositoryException(e);
        }
    }

    private User rsUser(ResultSet rs)throws SQLException{
        return new User(
                rs.getInt("id"),
                rs.getString("FirstName"),
                rs.getString("LastName"),
                rs.getInt("CurrentPoints"),
                rs.getString("Username"),
                rs.getString("Password")
        );

    }
    /**Denna metod skriver in data i databasen. Frågan är bara om man måste skriva in alla kolumner
     * eller om det räcker att bara uppdatera current points.*/
    @Override
    public void addPoints(int quizzedcompleted, int id) throws Exception{
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement("UPDATE [dbo].[user]" +
                     "SET CurrentPoints = ? " +
                     "WHERE id = ?;", new int[] {quizzedcompleted})) {
            ps.setInt(1, quizzedcompleted);
            ps.setInt(2, id);
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new Exception(e);
        }
    }



}
