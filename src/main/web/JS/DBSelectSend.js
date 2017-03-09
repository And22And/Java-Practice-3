function send(req) {
    req.open("POST", "getColomn", true);
    req.send($(this).val());
}

function ifError(req) {
    $("#error").text(req.status + ': ' + req.statusText);
}

function afterSend(req) {
    $(this).next().html(req.responseText);
}
