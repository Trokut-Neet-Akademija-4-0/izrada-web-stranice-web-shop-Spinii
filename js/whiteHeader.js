const xhttp = new XMLHttpRequest();

xhttp.onload = function(){
    document.getElementById("header").innerHTML = this.responseText
}

xhttp.open("GET", "../partials/shopheader.html");
xhttp.send();