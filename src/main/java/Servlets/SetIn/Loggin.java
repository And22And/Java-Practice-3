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
        getServletContext().getRequestDispatcher("/JSP/Loggin/loggin.jsp").forward(req, resp);
    }
}
