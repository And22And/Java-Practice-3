package Model;


import java.sql.*;
import java.util.Locale;

/**
 * Created by Клиент on 04.02.2017.
 */
public class DataBase implements DataAccessModel{
    Connection con;
    PreparedStatement stmt;
    ResultSet rs;

    public DataBase(String user, String pass) {
        Locale.setDefault(Locale.ENGLISH);
        this.con = null;
        this.stmt = null;
        this.rs = null;
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            String url = "jdbc:oracle:thin:@//localhost:1521/XE";
            this.con = DriverManager.getConnection(url, user, pass);
        } catch (Exception e) {
            close();
            e.printStackTrace();
        }
    }

    public void byRequest(String request) {
        try {
            this.stmt =  this.con.prepareStatement(request);
            this.rs =  this.stmt.executeQuery();
        } catch (SQLException e) {
            close();
            e.printStackTrace();
        }
    }

    public String getRsString(int in) {
        try {
            return rs.getString(in);
        } catch (SQLException e) {
            close();
            e.printStackTrace();
        }
        return null;
    }

    public boolean rsNext() {
        try {
            return rs.next();
        } catch (SQLException e) {
            close();
            e.printStackTrace();
        }
        return false;
    }

    public void close(){
        try {
            if (rs != null) {
                rs.close();
            }
            if (stmt != null) {
                stmt.close();
            }
            if (con != null) {
                con.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public int getColomnNumber(){
        int count = 0;
        try {
            count = stmt.getMetaData().getColumnCount();
        } catch (SQLException e) {
            close();
            e.printStackTrace();
        }
        return count;
    }

//    public static void main(String[] args) {
//
//    }
}
