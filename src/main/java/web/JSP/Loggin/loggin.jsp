<%--
  Created by IntelliJ IDEA.
  User: Клиент
  Date: 22.02.2017
  Time: 20:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Loggin</title>
</head>
<body>
    <form>
        <input type="text" id="userName">
        <input type="password" id="userPass">
        <input type="button" onclick="checkUser()">
        <div id = "error"></div>
    </form>
</body>
</html>
