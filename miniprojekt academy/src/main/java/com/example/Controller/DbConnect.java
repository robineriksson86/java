package com.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.*;

@RestController
public class DbConnect {

    /**Denna klass har en koppling till databasen
     * kan användas för att testa att kopplingen till databasen fungerar
     * **/

    @Autowired
    DataSource dataSource;

    /**Metod som returnerar poängen som ett heltal från databasen
     **/

//    @RequestMapping(value = "/dbtest")
//    public int getPoints () {
//        try (Connection conn = dataSource.getConnection();
//             PreparedStatement ps = conn.prepareStatement("SELECT CurrentPoints FROM [dbo].[user] WHERE id = ?")) {
//            ps.setInt(1, 2);
//            int userpoint = 0;
//            try (ResultSet rs = ps.executeQuery()) {
//                if (rs.next())
//                    userpoint = rs.getInt("CurrentPoints") ;
//            }
//            return userpoint;
//        } catch (SQLException e) {
//            throw new RepositoryException(e);
//        }
//    }


}
/*
    @RequestMapping(value = "/dbtest", produces = "text/plain")
    @ResponseBody
    public String getPoints() throws SQLException {
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT CurrentPoints FROM [dbo].[user] WHERE id = 2")) {
            int userpoint = 0 ;
            while (rs.next()) {
                userpoint = rs.getInt("CurrentPoints");
            }
            return "Poäng hämtade " + userpoint;
        }
    }*/

