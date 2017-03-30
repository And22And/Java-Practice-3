package Model;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Locale;

/**
 * Created by Клиент on 25.03.2017.
 */
public interface DataAccessModel {

    public void byRequest(String request);

    public String getRsString(int in);

    public boolean rsNext() ;

    public void close();

    public int getColomnNumber();
}
