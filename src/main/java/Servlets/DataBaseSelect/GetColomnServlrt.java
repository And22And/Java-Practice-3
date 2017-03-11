package Servlets.DataBaseSelect;

import Model.DataBase;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Клиент on 04.02.2017.
 */
@WebServlet(name = "getColumn", urlPatterns = "/getColomn")
public class GetColomnServlrt extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=utf-8");
        String table = req.getParameter("table");
        PrintWriter pw = resp.getWriter();
        DataBase db = new DataBase("user1", "user");
        db.byRequest("select column_name from user_tab_columns where table_name = '" + table + "'");
        try {
            pw.write("<select>"
                    + "<option disabled>Выберите колонку</option>"
                    + "<option>*</option>");
            while (db.rsNext()) {
                pw.write("<option>" + db.getRsString(1) + "</option>");
            }
            pw.write("</select>");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            db.close();
        }
    }

}
