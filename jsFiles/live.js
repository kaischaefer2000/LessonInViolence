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
        document.getElementById("birthdayBashFlyer").addEventListener("click", scaleImg3);
        document.getElementById("JugendhausEinsFlyer").addEventListener("click", scaleImg4);
    } else {

    }
  }
  
  var x = window.matchMedia("(min-width: 750px)")
  myFunction(x) 
  x.addListener(myFunction) 