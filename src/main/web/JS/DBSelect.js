var num = 2;
var tableCopy;
var selectWhere;

function loadContent() {
    document.cookie = "Table=" + $(this).val() + ";";    
    $($(this).closest(".selectTable").find(".DBcolomn")[0]).load("getColomn");
}

function addColomn(cur) {
    var pp = $(cur).closest(".selectTable").find(".DBcolomn")[0].parentElement.cloneNode(true);
    var but = document.createElement('input');
    but.setAttribute("type","button");
    but.setAttribute("value","-");
    but.setAttribute("onclick","deleteThis(this)");
    $(pp).append(but);
    //pp.getElementsByClassName("DBcolomn")[0].setAttribute("name", $(cur).closest(".selectTable").find(".allias")[0].val+"-row");
    cur.parentElement.before(pp);
}

function addWhere(cur) {
    var wheres = $(cur).closest(".selectTable").find(".DBwhere");
    if (wheres.length == 0) {
        var pp = $(cur).closest(".selectTable").find(".DBcolomn")[0].parentElement.cloneNode(true);
        pp.getElementsByTagName("option")[1].remove();

        var but = document.createElement('input');
        but.setAttribute("type", "button");
        but.setAttribute("value", "-");
        but.setAttribute("onclick", "deleteThis(this)");

        var select = selectWhere.cloneNode(true);
        select.setAttribute("name", $(cur).closest(".selectTable").find(".allias")[0].value+"-where-operation");

        var inpText = document.createElement('input');
        inpText.setAttribute("name", $(cur).closest(".selectTable").find(".allias")[0].value+"-where-value");

        $(pp).append(select);
        $(pp).append(inpText);
        $(pp).append(but);
        pp.firstChild.nextSibling.setAttribute("class", "DBwhere");
        pp.getElementsByClassName("DBwhere")[0].setAttribute("name", $(cur).closest(".selectTable").find(".allias")[0].value+"-where");

        cur.parentElement.before(pp);
    } else {
        cur.parentElement.before( $(cur).closest(".selectTable").find(".DBwhere")[0].parentElement.cloneNode(true));
    }
}

function addTable(cur) {
    var tables =  $(".selectTable");
    var newTable = tableCopy.cloneNode(true);
    var but = document.createElement('input');
    but.setAttribute("type","button");
    but.setAttribute("value","-");
    but.setAttribute("onclick","deleteThis(this)");
    newTable.append(but);
    newTable.getElementsByClassName("allias")[0].setAttribute("value", "a"+num);
    newTable.getElementsByClassName("DBcolomn")[0].setAttribute("name", "a"+num+"-colomn");
    cur.parentElement.before(newTable);
    $(".DBtable:last").change(loadContent);
    num++;
}

function addOrder(cur) {
    var tables = cur.parentElement.parentElement.getElementsByClassName("selectTable");
    var but = document.createElement('input');
    but.setAttribute("type","button");
    but.setAttribute("value","-");
    but.setAttribute("onclick","deleteThis(this)");
    //tables[tables.length-1].after(tableCopy.cloneNode(true));
}

function deleteThis(cur){
    cur.parentElement.remove();
}

$(document).ready(function(){
    selectWhere = document.createElement('select');
    var option = document.createElement('option');
    option.text = ">";
    selectWhere.appendChild(option.cloneNode(true));
    option.text = "=";
    selectWhere.appendChild(option.cloneNode(true));
    option.text = "<";
    selectWhere.appendChild(option.cloneNode(true));

    document.cookie = "Table=" + $(".DBtable:first").val() + ";";
    $(".DBtable:first").change(loadContent);
    tableCopy = document.getElementsByClassName("selectTable")[0].cloneNode(true);
});