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
    <link href="/web_war_exploded/CSS/loggin.css" rel="stylesheet" type="text/css">
    <script src = "/web_war_exploded/JS/jquery-3.1.1.js"></script>
    <script src = "/web_war_exploded/JS/Loggin.js"></script>
   </head>
<body>
<form>
      <p><input type="text" id="userName"></p>
      <p><input type="password" id="userPass"></p>
      <p><input type="button" onclick="sendRequest()" value="Loggin"></p>
      <div id = "error"></div>
  </form>
</body>
</html>
