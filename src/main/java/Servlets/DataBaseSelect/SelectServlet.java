package Servlets.DataBaseSelect;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Клиент on 02.02.2017.
 */
@WebServlet(name = "Select", urlPatterns = "/select")
public class SelectServlet  extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/JSP/Select/select.jsp").forward(req, resp);
    }
}
