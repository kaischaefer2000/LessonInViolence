window.document.onscroll = function () {
  if (window.pageYOffset > 50) {
    document.getElementsByTagName("HEADER")[0].style.backgroundColor = "black";
  } else {
  }

  // if ($(window).scrollTop() > 1) {
  //     document.getElementsByTagName("HEADER")[0].addClass('active');
  // } else {
  //     document.getElementsByTagName("HEADER")[0].removeClass('active');
  // }
};

let path = window.location.pathname;
if (path.includes("index.php")) {
  console.log(path);
  document.getElementById("main-title").innerHTML = "H<br>O<br>M<br>E";
  document.getElementById("main-title").style.lineHeight = "1.5em";
  document.getElementById("main-title").style.padding = "2.5vw 0px 2.5vw";
} else if (path.includes("live.php")) {
  console.log(path);
  document.getElementById("main-title").innerHTML = "L<br>I<br>V<br>E";
  document.getElementById("main-title").style.lineHeight = "1.5em";
  document.getElementById("main-title").style.padding = "2.5vw 0px 2.5vw";
} else if (path.includes("media.php")) {
  console.log(path);
  document.getElementById("main-title").innerHTML = "M<br>E<br>D<br>I<br>A";
  document.getElementById("main-title").style.lineHeight = "1.5em";
  document.getElementById("main-title").style.padding = "2.5vw 0px 2.5vw";
} else {
}
