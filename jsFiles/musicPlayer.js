const thumbnail1 = document.querySelector('#tmb1'); 
const thumbnail2 = document.querySelector('#tmb2');
const thumbnail3 = document.querySelector("#tmb3");
const thumbnail4 = document.querySelector("#tmb4"); 

const song1 = document.querySelector('#song1');
const song2 = document.querySelector('#song2');
const song3 = document.querySelector("#song3");
const song4 = document.querySelector("#song4");

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar1 = document.querySelector('#pb1');
const progressBar2 = document.querySelector('#pb2');
const progressBar3 = document.querySelector("#pb3");
const progressBar4 = document.querySelector("#pb4"); 

let pPause1 = document.querySelector('#pp1');
let pPause2 = document.querySelector('#pp2');
let pPause3 = document.querySelector("#pp3");
let pPause4 = document.querySelector("#pp4");


// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
    if (playing) {
       
        pPause1.src = "../audioPlayer/pause.png"
        thumbnail1.style.transform = "scale(1.15)";

        song1.play();
        playing = false;
    } else {
        pPause1.src = "../audioPlayer/play.png"
        thumbnail1.style.transform = "scale(1)"

        song1.pause();
        playing = true;
    }
}

function playPause2() {
    if (playing) {

        pPause2.src = "../audioPlayer/pause2.png"
        thumbnail2.style.transform = "scale(1.15)";

        song2.play();
        playing = false;
    } else {
        pPause2.src = "../audioPlayer/play2.png"
        thumbnail2.style.transform = "scale(1)"

        song2.pause();
        playing = true;
    }
}

function playPause3() {
  if (playing) {
    pPause3.src = "../audioPlayer/pause3.png";
    thumbnail3.style.transform = "scale(1.15)";

    song3.play();
    playing = false;
  } else {
    pPause3.src = "../audioPlayer/play3.png";
    thumbnail3.style.transform = "scale(1)";

    song3.pause();
    playing = true;
  }
}

function playPause4() {
  if (playing) {
    pPause4.src = "../audioPlayer/pause4.png";
    thumbnail4.style.transform = "scale(1.15)";

    song4.play();
    playing = false;
  } else {
    pPause4.src = "../audioPlayer/play4.png";
    thumbnail4.style.transform = "scale(1)";

    song4.pause();
    playing = true;
  }
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar1.max = song1.duration;
    progressBar1.value = song1.currentTime;
    document.querySelector('#ct1').innerHTML = (formatTime(Math.floor(song1.currentTime)));
    if (document.querySelector('#dt1').innerHTML === "NaN:NaN") {
        document.querySelector('#dt1').innerHTML = "0:00";
    } else {
        document.querySelector('#dt1').innerHTML = (formatTime(Math.floor(song1.duration)));
    }
};

function updateProgressValue2() {
    progressBar2.max = song2.duration;
    progressBar2.value = song2.currentTime;
    document.querySelector('#ct2').innerHTML = (formatTime(Math.floor(song2.currentTime)));
    if (document.querySelector('#dt2').innerHTML === "NaN:NaN") {
        document.querySelector('#dt2').innerHTML = "0:00";
    } else {
        document.querySelector('#dt2').innerHTML = (formatTime(Math.floor(song2.duration)));
    }
};

function updateProgressValue3() {
    progressBar3.max = song3.duration;
    progressBar3.value = song3.currentTime;
    document.querySelector('#ct3').innerHTML = (formatTime(Math.floor(song3.currentTime)));
    if (document.querySelector('#dt3').innerHTML === "NaN:NaN") {
        document.querySelector('#dt3').innerHTML = "0:00";
    } else {
        document.querySelector('#dt3').innerHTML = (formatTime(Math.floor(song3.duration)));
    }
};

function updateProgressValue4() {
    progressBar4.max = song4.duration;
    progressBar4.value = song4.currentTime;
    document.querySelector('#ct4').innerHTML = (formatTime(Math.floor(song4.currentTime)));
    if (document.querySelector('#dt4').innerHTML === "NaN:NaN") {
        document.querySelector('#dt4').innerHTML = "0:00";
    } else {
        document.querySelector('#dt4').innerHTML = (formatTime(Math.floor(song4.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
        sec = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

setInterval(updateProgressValue2, 500);

setInterval(updateProgressValue3, 500);

setInterval(updateProgressValue4, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};

function changeProgressBar2() {
    song2.currentTime = progressBar2.value;
};

function changeProgressBar3() {
    song3.currentTime = progressBar3.value;
};

function changeProgressBar4() {
    song4.currentTime = progressBar4.value;
};