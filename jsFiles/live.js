document.getElementById('main-title').innerHTML = 'L<br>I<br>V<br>E';
document.getElementById('main-title').style.lineHeight = '1.5em';
document.getElementById('main-title').style.padding = '2.5vw 0px 2.5vw';

var acc = document.getElementsByClassName("show");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var details = this.nextElementSibling;
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }

    });
}

// click event for Bone Breaker Flyer
img = document.getElementById("boneBreakerFlyer");

function scaleImg(){
    if(img.classList.contains("bigImg")){
        img.classList.remove("bigImg");
        img.style.width = "15vw";
        img.style.transition = "width 0.8s ease-in-out";
    }
    else{
        img.style.width = "30vw";
        img.style.transition = "width 0.8s ease-in-out";
        img.classList.add("bigImg");
    }
}


// click event for Jugendhaus zwei Flyer
img2 = document.getElementById("JugendhausZweiFlyer");

function scaleImg2(){
    if(img2.classList.contains("bigImg")){
        img2.classList.remove("bigImg");
        img2.style.width = "15vw";
        img2.style.transition = "width 0.8s ease-in-out";
    }
    else{
        img2.style.width = "30vw";
        img2.style.transition = "width 0.8s ease-in-out";
        img2.classList.add("bigImg");
    }
}

// click event for Birthday Bash Flyer
img3 = document.getElementById("birthdayBashFlyer");

function scaleImg3(){
    if(img3.classList.contains("bigImg")){
        img3.classList.remove("bigImg");
        img3.style.width = "15vw";
        img3.style.transition = "width 0.8s ease-in-out";
    }
    else{
        img3.style.width = "30vw";
        img3.style.transition = "width 0.8s ease-in-out";
        img3.classList.add("bigImg");
    }
}

// click event for Jugendhaus eins Flyer
img4 = document.getElementById("JugendhausEinsFlyer");

function scaleImg4(){
    if(img4.classList.contains("bigImg")){
        img4.classList.remove("bigImg");
        img4.style.width = "15vw";
        img4.style.transition = "width 0.8s ease-in-out";
    }
    else{
        img4.style.width = "30vw";
        img4.style.transition = "width 0.8s ease-in-out";
        img4.classList.add("bigImg");
    }
}

// click event only when screen is big enough
function myFunction(x) {
    if (x.matches) {
        document.getElementById("boneBreakerFlyer").addEventListener("click", scaleImg);
        document.getElementById("JugendhausZweiFlyer").addEventListener("click", scaleImg2);
        document.getElementById("birthdayBashFlyer").addEventListener("click", scaleImg3);
        document.getElementById("JugendhausEinsFlyer").addEventListener("click", scaleImg4);
    } else {

    }
  }
  
  var x = window.matchMedia("(min-width: 750px)")
  myFunction(x) 
  x.addListener(myFunction) 