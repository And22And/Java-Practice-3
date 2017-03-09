package Servlets.SetIn;

import Model.Code;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Клиент on 22.02.2017.
 */

@WebServlet(name = "ChekLoggin", urlPatterns = "/check.loggin")
public class ChekLoggin extends HttpServlet {

    static final String namePart = "name=";
    static final String passPart = "pass=";

        public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            BufferedReader br = req.getReader();
            String body = br.readLine();
            System.out.println(body);
            String name = body.substring(body.indexOf(namePart)+namePart.length(), body.indexOf(" "));
            String pass = body.substring(body.indexOf(passPart)+passPart.length());
            System.out.println(name);
            System.out.println(pass);
            System.out.println(Code.md5Custom(pass));
            PrintWriter pw = resp.getWriter();
            pw.write("False");
        }

    }
