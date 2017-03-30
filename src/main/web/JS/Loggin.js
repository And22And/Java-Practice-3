function sendRequest() {
    $.ajax({
        type:"POST",
        url:"/web_war_exploded/checkLoggin",
        data:"name="+$("#userName").val() + " pass="+$("#userPass").val(),
        cache: false,
        success:function (result) {
            if(result != "Ok") {
                $("#error").html(result);
            }else {
                location.reload();
            }
        },
        error: function(xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    })
}