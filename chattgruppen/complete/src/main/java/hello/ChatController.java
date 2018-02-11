package hello;

import hello.database.DbData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.logging.*;

@Controller
public class ChatController {
    @Autowired
    DataSource dataSource;

    private static final Logger logger = Logger.getLogger(ChatController.class.getName());

    private ArrayList<String> usersConnected = new ArrayList<>();

    private User tempUser;

    @GetMapping("/")
    public String form() {
        logger.log(Level.INFO, "form");
        return "redirect:/index.html";
    }

    @GetMapping("/login")
    public String form1() {
        logger.log(Level.INFO, "form1");

        return "redirect:/index.html";
    }

    @PostMapping("/login")
    public ModelAndView loginSite(@RequestParam String Username, @RequestParam String Password) throws Exception {
        logger.log(Level.INFO, "loginSite");
        String content = "";
        User user = new User(Username, Password);

        if (checkUser(user)) {
            logger.log(Level.INFO, "accepted");
            content = user.getUsername() + " just logged in.";
            tempUser = user;
            return new ModelAndView("chat").addObject("username", tempUser.getUsername());
        } else {
            logger.log(Level.INFO, "denied");
            content = "denied";
            return new ModelAndView("redirect:/index.html");
        }
    }


    @MessageMapping("/login")
    @SendTo("/topic/chat")
    public Container login() throws Exception {
        User user = tempUser;
        logger.log(Level.FINEST, "************** HURRA! login");
        String content = "";

        if (checkUser(user)) {
            content = user.getUsername();
        } else {
            content = "denied";
        }

        return new Container(
                Container.USER_LOGGED_IN,
                content
        );
    }

    private boolean checkUser(User user) {
        DbData db = new DbData(dataSource);
        return db.checkLogin(user.getUsername(), user.getPassword());
    }

    @MessageMapping("/chatting")
    @SendTo("/topic/chat")
    public Container container(Time time, User user, Message message) throws Exception {
        if (user != null) {
            return new Container(Container.USER_MESSAGE,
                    time.getTimeStamp() + " "
                    + user.getUsername() + ": "
                    + message.getMessage()
            );
        } else {
            return null;
        }
    }

    @MessageMapping("/disconnect")
    @SendTo("/topic/chat")
    public Container disconnect(User user) throws Exception {
        for(int i = 0; i < usersConnected.size(); i++) {
            if(usersConnected.get(i).equals(user.getUsername())) {
                usersConnected.remove(i);

                logger.log(Level.INFO, "disconnected remove usersConnected: " + usersConnected.toString());
            }
        }
        logger.log(Level.INFO, "disconnected usersConnected: " + usersConnected.toString());
        return new Container(
                Container.USER_LIST,
                usersConnected.toString()
        );
    }

    @MessageMapping("/connecting")
    @SendTo("/topic/chat")
    public Container connecting(User user) throws Exception {
        boolean foundDuplicate = false;

        for(int i = 0; i < usersConnected.size(); i++) {
            if(usersConnected.get(i).equals(user.getUsername())) {
                foundDuplicate = true;
                break;
            }
        }

        if(!foundDuplicate) {
            usersConnected.add(user.getUsername());
        }

        String userListStringFormat = "";
        for(String un : usersConnected) {
            userListStringFormat += un + "<br/>";
        }

        return new Container(
                Container.USER_LIST,
                userListStringFormat
        );
    }

    /* TODO: IMPLEMENT LOGOUT FUNCTION
    @GetMapping("/logout")
    public String logout(HttpSession session, HttpServletResponse res) {
        session.invalidate();
        Cookie cookie = new Cookie("jsessionid", "");
        cookie.setMaxAge(0);
        res.addCookie(cookie);
        return "login";
    }
    */
}

