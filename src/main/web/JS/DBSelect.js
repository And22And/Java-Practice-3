var num = 2;
var tableCopy;
var selectWhere;
var minusBut;

function loadContent(){
    if(cur == null) {
        var cur = this;
    }
    $.ajax({
        type:"POST",
        url:"/web_war_exploded/getColomn",
        data:"table=" + $(cur).val(),
        cache: false,
        success:function (result) {
            $(cur).closest(".selectTable").find(".selectColomns").find("input[value='-'][type='button']").each(function (ind, elem) {
                elem.parentNode.remove();
            });
            $(cur).closest(".selectTable").find(".Where").find("input[value='-'][type='button']").each(function (ind, elem) {
                elem.parentNode.remove();
            });
            // var p = document.createElement('p');
            // var colomn = document.createElement('select');
            // $(colomn).html(result);
            // colomn.setAttribute("name", $(cur).closest(".selectTable").find(".allias")[0].value+"-colomn");
            // colomn.setAttribute("class", "DBcolomn");
            // $(colomn).html(result);
            // p.append(colomn);
            // p.append(minusBut.cloneNode(true));
            // $(cur).closest(".selectTable").find(".DBcolomn:last").after(p);
            $(cur).closest(".selectTable").find(".DBcolomn:first").html(result);
        },
        error: function(xhr) {
            // alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    })
}

function addColomn(cur) {
    // if ($(cur).closest(".selectTable").find(".DBcolomn").length > 0) {
    var pp = $(cur).closest(".selectTable").find(".DBcolomn:first").parentElement.cloneNode(true);
    $(pp).append(minusBut.cloneNode(true));
    cur.parentElement.before(pp);
    // } else {
    //     loadContent($(cur).closest(".selectTable").find(".DBtable")[0]);
    // }
}

function addWhere(cur) {
    var wheres = $(cur).closest(".selectTable").find(".DBwhere");
    if (wheres.length == 0) {
        var pp = $(cur).closest(".selectTable").find(".DBcolomn:first").parentElement.cloneNode(true);
        $(pp).find("option[value='*']").remove();

        var select = selectWhere.cloneNode(true);
        select.setAttribute("name", $(cur).closest(".selectTable").find(".allias:first").value+"-where-operation");

        var inpText = document.createElement('input');
        inpText.setAttribute("name", $(cur).closest(".selectTable").find(".allias:first").value+"-where-value");

        $(pp).append(select);
        $(pp).append(inpText);
        $(pp).append(minusBut.cloneNode(true));
        pp.firstChild.nextSibling.setAttribute("class", "DBwhere");
        pp.getElementsByClassName("DBwhere")[0].setAttribute("name", $(cur).closest(".selectTable").find(".allias:first").value+"-where-colomn");

        cur.parentElement.before(pp);
    } else {
        cur.parentElement.before( $(cur).closest(".selectTable").find(".DBwhere")[0].parentElement.cloneNode(true));
    }
}

function addTable(cur) {
    var newTable = tableCopy.cloneNode(true);
    newTable.append(minusBut.cloneNode(true));
    $(newTable).find(".allias:first").attr("value", "a"+num);
    $(newTable).find(".uniqName:first").attr("value", "a"+num);
    $(newTable).find(".DBcolomn:first").attr("name", "a"+num+"-colomn");
    
    var referenses = document.createElement("div");
    referenses.setAttribute("class", "references");
    var but = document.createElement('input');
    but.setAttribute("type", "button");
    but.setAttribute("value", "+");
    but.setAttribute("onclick", "addReferences(this)");
    referenses.appendChild(but);

    $(newTable).find(".selectColomns:first").before(referenses);

    cur.parentElement.before(newTable);
    $(".DBtable:last").change(loadContent);

    $("[name='order-table']").append("<option value='" + $(".allias:last").val() + "'>" + $(".allias:last").val() + "</option>")
    $("[name*='references-foreignTable']").append("<option value='" + $(".allias:last").val() + "'>" + $(".allias:last").val() + "</option>")
    num++;
}

function addReferences(cur) {
    if($(".DBreferences").length == 0) {
        var pp = document.createElement('p');
        var option = document.createElement('option');
        var colomns = ($(cur).closest(".selectTable").find(".DBcolomn:first")).cloneNode(true);   //////////////
        colomns.setAttribute("name", $(cur).closest(".selectTable").find(".allias:first").value + "-references-colomn");
        colomns.setAttribute("class", "DBreferences");

        var foreignTable = document.createElement("select");
        var tables = $("[name='allias']");
        for (var i = 0; i < tables.size; i++) {
            option.text = tables[i].value;
            option.value = tables[i].value;
            foreignTable.appendChild(option.cloneNode(true));
        }
        foreignTable.setAttribute("name", $(cur).closest(".selectTable").find(".allias:first").value + "-references-foreignTable");
        foreignTable.setAttribute("class", "DBreferences");

        var foreignColomn = document.createElement("select");
        foreignColomn.setAttribute("name", $(cur).closest(".selectTable").find(".allias:first").value + "-references-foreignColomn");
        foreignColomn.setAttribute("class", "DBreferences");

        $(foreignTable).change(loadColomn($(cur).closest(".selectTable").find(".allias:first").value + "-references-foreignColomn"));

        pp.appendChild(colomns);
        pp.appendChild(foreignTable);
        pp.appendChild(foreignColomn);

        cur.parentElement.before(pp);
    } else {
        cur.parentElement.before(($(".DBreferences:first").parentElement).cloneNode(true));
    }
}

function addOrder(cur) {
    if ($(".DBorder").length == 0) {
        var alliases = document.getElementsByClassName("allias");
        var selectTable = document.createElement('select');
        var option = document.createElement('option');
        for (var i = 0; i < alliases.length; i++) {
            option.text = alliases[i].value;
            option.setAttribute("value", alliases[i].value);
            selectTable.append(option.cloneNode(true));
        }
        selectTable.setAttribute("class", "DBorder");
        selectTable.setAttribute("name", "order-table");

        var selectColomn = ($($(".selectTable:first")).find(".DBcolomn:first")).cloneNode(true);
        selectColomn.setAttribute("name", "order-colomn");
        selectColomn.setAttribute("class", "DBorder");

        var order = document.createElement("p");
        order.append(selectTable);
        order.append(selectColomn);
        order.append(minusBut.cloneNode(true));
        cur.parentElement.before(order);

        $("[name=order-table]:first").change(loadColomn("order-colomn"));          ///////////!!!!!!
    } else {
        cur.parentElement.before(($(".DBorder:first").parentElement).cloneNode(true));
    }
}

function loadColomn(selectName){
    alert("I'm here");
    if(this.value) {
        $(this).parentElement.find("[name='"+ selectName + "']").html($($(".allias[value='" + this.value + "']:first")).closest(".selectTable").find(".DBcolomn")[0].innerHTML);
    }
}

function deleteThis(cur){
    if(cur.parentElement.className == "selectTable") {
        $(".DBorder option[value='" + $(cur.parentNode).find("[name='allias']:first").val() + "']").remove();
        $(".DBreferences option[value='" + $(cur.parentNode).find("[name='allias']:first").val() + "']").remove();
    }
    cur.parentElement.remove();
}

$(document).ready(function(){
    selectWhere = document.createElement('select');
    var option = document.createElement('option');
    option.text = ">";
    option.value = ">";
    selectWhere.appendChild(option.cloneNode(true));
    option.text = "=";
    option.value = "=";
    selectWhere.appendChild(option.cloneNode(true));
    option.text = "<";
    option.value = "<";
    selectWhere.appendChild(option.cloneNode(true));

    minusBut = document.createElement('input');
    minusBut.setAttribute("type", "button");
    minusBut.setAttribute("value", "-");
    minusBut.setAttribute("onclick", "deleteThis(this)");

    $(".DBtable:first").change(loadContent);
    tableCopy = document.getElementsByClassName("selectTable")[0].cloneNode(true);
});