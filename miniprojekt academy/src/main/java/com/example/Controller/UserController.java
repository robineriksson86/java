package com.example.Controller;
import com.example.Repository.RepositoryInterface;
import com.example.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

@Controller
public class UserController {

    @Autowired
    DataSource dataSource;

    @Autowired
    RepositoryInterface repository;

    @PostMapping("/User")
    public ModelAndView login(@RequestParam String username,@RequestParam String password, HttpSession session) {
        User user = repository.getUser(username, password); // returnerar en user om lösen och inlogg stämmer
        if (user !=null) {
            session.setAttribute("user", user);
            return new ModelAndView("app").addObject("user", user);
        }
        return new ModelAndView("redirect:/");
    }

    @GetMapping("/addPoints/{quizzesCompleted}")
    public void addPoints(@PathVariable int quizzesCompleted, HttpSession session) throws Exception {
        User user = (User) session.getAttribute("user");
        repository.addPoints(quizzesCompleted, user.id);
    }

//    @GetMapping("/User")
//    public ModelAndView loginUser() {
//        try (Connection conn = dataSource.getConnection();
//             PreparedStatement ps = conn.prepareStatement("SELECT CurrentPoints FROM [dbo].[user] WHERE id = ?")) {
//            ps.setInt(1, 2);
//            int userpoint = 0;
//            try (ResultSet rs = ps.executeQuery()) {
//                if (rs.next())
//                    userpoint = rs.getInt("CurrentPoints") ;
//            }
//            return new ModelAndView("blog/list")
//                    .addObject("user", user);
//        } catch (SQLException e) {
//            throw new RepositoryException(e);
//        }
//    }
}
