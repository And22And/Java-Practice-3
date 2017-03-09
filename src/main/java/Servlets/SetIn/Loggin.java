package Servlets.SetIn;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Клиент on 22.02.2017.
 */
@WebServlet(name = "Loggin", urlPatterns = "/loggin")
public class Loggin extends HttpServlet{
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter pw = resp.getWriter();
        pw.write("<html>\n" +
                "<head>\n" +
                "    <title>Loggin</title>\n" +
                "<link href=\"/WebServlets_war_exploded/CSS/loggin.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
                "    <script src = \"/web_war_exploded/JS/jquery-3.1.1.js\"></script>\n" +
                "    <script src = \"/web_war_exploded/JS/Loggin.js\"></script>\n" +
                "    <script src = \"/web_war_exploded/JS/AJAX.js\"></script>\n" +
                "</head>\n" +
                "<body>");

        pw.write("<form>\n" +
                "        <p><input type=\"text\" id=\"userName\"></p>\n" +
                "        <p><input type=\"password\" id=\"userPass\"></p>\n" +
                "        <p><input type=\"button\" onclick=\"sendRequest()\" value=\"Loggin\"></p>\n" +
                "        <div id = \"error\"></div>\n" +
                "    </form>");

        pw.write("</body>\n" +
                 "</html>");

       // getServletContext().getRequestDispatcher("/JSP/Loggin/login.jsp").forward(req, resp);
    }
}
