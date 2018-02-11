package com.example.Repository;

import com.example.Domain.Quote;
import com.example.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
public class Repository {

    @Autowired
    private DataSource dataSource;

    public List<Quote> getQuotes() {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT * FROM Quotes ORDER BY id DESC")) {
            try (ResultSet rs = ps.executeQuery()) {
                List<Quote> quotes = new ArrayList<>();
                while (rs.next()) {
                    quotes.add(rsQuote(rs));
                }
                return quotes;
            }
        } catch (SQLException e) {
        }
        return null;
    }

    private Quote rsQuote(ResultSet rs) throws SQLException {
        return new Quote(
                rs.getInt(1),//id
                rs.getString(2),//Quote
                rs.getString(3)//Kategori
        );

    }

    public User getUser(String Username, String Password) throws Exception {

        try (Connection conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("SELECT mirroruser, userpassword FROM Users WHERE mirroruser= ? AND userpassword= ?")) {
            ps.setString(1, Username);
            ps.setString(2, Password);

            try (ResultSet rs = ps.executeQuery()) {

                if (!rs.next()) return null;
                else return rsUser(rs);
            } catch (SQLException e) {
                throw new Exception(e);
            }
        }
    }

    private User rsUser(ResultSet rs) throws SQLException {
        return new User(
                rs.getString("mirroruser"),
                rs.getString("userpassword")
        );
    }

    public void addQuote(String MirrorQuote, String QuoteType) throws Exception {
        try (Connection conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("INSERT INTO Quotes(MirrorQuote, QuoteType)VALUES (?,?)", new String[]{"id"})) {

            ps.setString(1, MirrorQuote);
            ps.setString(2, QuoteType);

            ps.executeUpdate();

        } catch (SQLException e) {
            throw new Exception(e);
        }
    }

    public void deleteQuote(int id) throws Exception{
        try (Connection conn = dataSource.getConnection();
             PreparedStatement ps = conn.prepareStatement("DELETE FROM Quotes WHERE id=(?)")) {
            ps.setInt(1, id);


            ps.executeUpdate();

        } catch (SQLException e) {
            throw new Exception(e);
        }

    }

}