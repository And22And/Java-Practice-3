var req;
function initRequest() {
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function sendRequest() {
    initRequest();
    req.onreadystatechange = callback;
    send(req);   
}

function callback() {   
    if (req.readyState == 4) {        
        if(req.status == 200){
            afterSend(req);            
        } else {
            ifError(req);           
        }
    }
}
