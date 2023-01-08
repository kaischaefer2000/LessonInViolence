// TODO: refactor !!!!!
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

// click event for LessonsInMetalFlyer
img2 = document.getElementById("LessonsInMetalFlyer");

function scaleImg2() {
  if (img2.classList.contains("bigImg")) {
    img2.classList.remove("bigImg");
    img2.style.width = "15vw";
    img2.style.transition = "width 0.8s ease-in-out";
  } else {
    img2.style.width = "30vw";
    img2.style.transition = "width 0.8s ease-in-out";
    img2.classList.add("bigImg");
  }
}

// click event for InfernumFlyer
img5 = document.getElementById("InfernumFlyer");

function scaleImg5() {
  if (img5.classList.contains("bigImg")) {
    img5.classList.remove("bigImg");
    img5.style.width = "15vw";
    img5.style.transition = "width 0.8s ease-in-out";
  } else {
    img5.style.width = "30vw";
    img5.style.transition = "width 0.8s ease-in-out";
    img5.classList.add("bigImg");
  }
}

// click event for Birthday Bash Flyer
img3 = document.getElementById("birthdayBashFlyer");

function scaleImg3() {
  if (img3.classList.contains("bigImg")) {
    img3.classList.remove("bigImg");
    img3.style.width = "15vw";
    img3.style.transition = "width 0.8s ease-in-out";
  } else {
    img3.style.width = "30vw";
    img3.style.transition = "width 0.8s ease-in-out";
    img3.classList.add("bigImg");
  }
}

// click event for Jugendhaus eins Flyer
img4 = document.getElementById("JugendhausEinsFlyer");

function scaleImg4() {
  if (img4.classList.contains("bigImg")) {
    img4.classList.remove("bigImg");
    img4.style.width = "15vw";
    img4.style.transition = "width 0.8s ease-in-out";
  } else {
    img4.style.width = "30vw";
    img4.style.transition = "width 0.8s ease-in-out";
    img4.classList.add("bigImg");
  }
}

// click event for Birthday Moshpit
img6 = document.getElementById("MoshpitFlyer");

function scaleImg6() {
  if (img6.classList.contains("bigImg")) {
    img6.classList.remove("bigImg");
    img6.style.width = "15vw";
    img6.style.transition = "width 0.8s ease-in-out";
  } else {
    img6.style.width = "30vw";
    img6.style.transition = "width 0.8s ease-in-out";
    img6.classList.add("bigImg");
  }
}

// click event for Zyklop
img7 = document.getElementById("ZyklopFlyer");

function scaleImg7() {
  if (img7.classList.contains("bigImg")) {
    img7.classList.remove("bigImg");
    img7.style.width = "15vw";
    img7.style.transition = "width 0.8s ease-in-out";
  } else {
    img7.style.width = "30vw";
    img7.style.transition = "width 0.8s ease-in-out";
    img7.classList.add("bigImg");
  }
}

// click event for metal massacre
img8 = document.getElementById("MetalMassacreFlyer");

function scaleImg8() {
  if (img8.classList.contains("bigImg")) {
    img8.classList.remove("bigImg");
    img8.style.width = "15vw";
    img8.style.transition = "width 0.8s ease-in-out";
  } else {
    img8.style.width = "30vw";
    img8.style.transition = "width 0.8s ease-in-out";
    img8.classList.add("bigImg");
  }
}

// click event only when screen is big enough
function myFunction(x) {
  if (x.matches) {
    document
      .getElementById("LessonsInMetalFlyer")
      .addEventListener("click", scaleImg2);
    document
      .getElementById("birthdayBashFlyer")
      .addEventListener("click", scaleImg3);
    document
      .getElementById("JugendhausEinsFlyer")
      .addEventListener("click", scaleImg4);
    document
      .getElementById("InfernumFlyer")
      .addEventListener("click", scaleImg5);
    document
      .getElementById("MoshpitFlyer")
      .addEventListener("click", scaleImg6);
    document.getElementById("ZyklopFlyer").addEventListener("click", scaleImg7);
    document
      .getElementById("MetalMassacreFlyer")
      .addEventListener("click", scaleImg8);
  } else {
  }
}

var x = window.matchMedia("(min-width: 750px)");
myFunction(x);
x.addListener(myFunction);
