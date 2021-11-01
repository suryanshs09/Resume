var menuLinks = document.getElementById("menuLinks");
function openMenu(){
    menuLinks.style.width = "80%";
}
function hideMenu(){
    menuLinks.style.width = "0%";
}

function displaySocials(){
    document.getElementById("socials").style.transition = "0.5s";
    document.getElementById("socials").style.display = "block";
}
var i = 0;
var txt = 'I am Suryansh Sharma';
var speed = 100;
function typeWrite() {
    if (i < txt.length) {
        document.getElementById("myIntro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
    else{
        displaySocials();
    }
}
window.onload = typeWrite;