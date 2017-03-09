function send(req) {
    req.open("POST", "chekLoggin", true);
    req.send("name="+$("#userName").val() + " pass="+$("#userPass").val());
}

function ifError(req) {
    $("#error").text(req.status + ': ' + req.statusText);
}

function afterSend(req) {
    if(req.responseText == "OK") {
        location.reload();
    } else {
        $("#error").text(req.responseText);
    }
}
