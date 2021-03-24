
const background = document.querySelector('#background'); // background derived from album cover below
const thumbnail1 = document.querySelector('#tmb1'); 
const thumbnail2 = document.querySelector('#tmb2'); 
const song1 = document.querySelector('#song1');
const song2 = document.querySelector('#song2');

const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears
const progressBar1 = document.querySelector('#pb1');
const progressBar2 = document.querySelector('#pb2'); 
let pPause1 = document.querySelector('#pp1');
let pPause2 = document.querySelector('#pp2');


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

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};

function changeProgressBar2() {
    song2.currentTime = progressBar2.value;
};