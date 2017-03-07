<%--
  Created by IntelliJ IDEA.
  User: Клиент
  Date: 16.12.2016
  Time: 17:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>$Title$</title>
  <link href="/web_war_exploded/CSS/main.css" rel="stylesheet" type="text/css">
</head>
<body>
<header></header>
<nav>
  <a href="/web_war_exploded/select">Select</a>
  <a href="/web_war_exploded/loggin">Loggin</a>
</nav>
<section>
  <form action="JSP/Select/hello.jsp" method="POST">
    colomn Name: <input type="text" name="first_col">
    <br />
    colomn Name: <input type="text" name="second_col" />
    <input type="submit" value="Submit" />
  </form>
</section>
<footer></footer>
</body>
</html>
