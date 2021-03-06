<%@ page import="Model.DataBase" %><%--
  Created by IntelliJ IDEA.
  User: Клиент
  Date: 02.02.2017
  Time: 16:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Select</title>
    <link href="/web_war_exploded/CSS/main.css" rel="stylesheet" type="text/css">
    <link href="/web_war_exploded/CSS/select.css" rel="stylesheet" type="text/css">
    <script src = "/web_war_exploded/JS/jquery-3.1.1.js"></script>
    <script src = "/web_war_exploded/JS/DBSelect.js"></script>
</head>
<body>
<header>Cool data base</header>
<jsp:include page="../Content/menu.jsp"/>
<section>
    <form action="showTable.jsp" method="POST" id="selectform">
        <div class = "selectTable">
            <p>Tables:
                <select class = "DBtable" name="table">
                    <option disabled>Выберите таблицу</option>
                    <%
                        DataBase db = null;
                        try {
                            db = new DataBase("user1","user");
                            db.byRequest("select TABLE_NAME from all_tables where owner = user");
                            String firstTable = null;
                            if(db.rsNext()) {
                                firstTable = db.getRsString(1);
                    %><option value=<%=db.getRsString(1)%> ><%=db.getRsString(1)%></option>;
                    <%}
                        while (db.rsNext()) {
                    %>
                    <option><%=db.getRsString(1)%></option>
                    <%
                        }
                    %></select>
                <p>Allias : <input type="text"  value="a1" class="allias" name = "allias"></p>
                <input type="text" hidden value="a1" class="uniqName" name = "uniqName">
            </p>
            <div class="selectColomns">
                <p>Rows</p>
                <p>
                    <select name="a1-colomn" class="DBcolomn">
                        <option value='*'>*</option><%
                        db.byRequest("select column_name from user_tab_columns where table_name = '"  + firstTable + "'");
                        while (db.rsNext()) {
                    %>
                        <option  value=<%=db.getRsString(1)%> ><%=db.getRsString(1)%></option>
                        <%}
                        %></select>
                    <%--<input type="button" value="-" onclick="deleteThis(this)">--%>
                    <%} catch (Exception e) {
                        e.printStackTrace();
                    } finally {
                        if(db != null) {
                            db.close();
                        }
                    }
                    %>
                </p>
                <p><input type="button" value="+" onclick="addColomn(this)"></p>
            </div>
            <div class="Where">
                <p>Where</p>
                <p><input type="button" value="+" onclick="addWhere(this)"></p>
            </div>
        </div>
        <p><input type="button" value="+" onclick="addTable(this)"></p>
        <div class="Order">
            <p>Order</p>
            <p><input type="button" value="+" onclick="addOrder(this)"></p>
        </div>
        <p><input type="submit" value="Отправить"></p>
    </form>
</section>
<footer>Cool footer</footer>
</body>
</html>
