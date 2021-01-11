document.getElementById("more").onclick = function moreInfo () {
    window.open('https://hu.wikipedia.org/wiki/Kos%C3%A1rlabda', '_blank');
}

var darkCount = 0;  

document.getElementById("dark").onclick = function () { 

    var b0 = document.getElementById("html");
    var b1 = document.getElementById("body");
    var b2 = document.getElementById("text1");
    var b3 = document.getElementById("table");   
    var b4 = document.getElementById("cim")
    var b5 = document.getElementById("katt")

    darkCount+=1
    if (darkCount % 2 == 0){
        console.log("dark");
        b1.style.background = "rgb(36, 36, 36)";
        b0.style.background = "rgb(36, 36, 36)";
        b2.style.color = "whitesmoke";
        b3.style.color = "whitesmoke";
        b4.style.color = "whitesmoke";
        b5.style.color = "whitesmoke";

}    
    else  {
        console.log("white");
        b1.style.background = "white";
        b0.style.background = "white";
        b2.style.color = "black";
        b3.style.color = "black";
        b4.style.color = "black";
        b5.style.color = "black";
    }
    
}