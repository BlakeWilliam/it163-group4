function swapStyleSheet(sheet) {
    document.getElementById("theme").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("normalmode");
    var style2 = document.getElementById("darkmode");

    style1.onclick = function () { swapStyleSheet("css/normalmode.css") };
    style2.onclick = function () { swapStyleSheet("css/darkmode.css"); };
}

window.onload = initate;
