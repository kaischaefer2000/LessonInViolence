// declaring variables 
const back = document.getElementById("back");
const front = document.getElementById("front");

const bgImg = document.getElementById("bgImg");
const imgFront = document.getElementById("imgFront");
const imgBack = document.getElementById("imgBack");

var numbr = 0;

// activate picture of shirt back
function backActive(){
    if(front.classList.contains("active")){
        front.classList.remove("active");
        imgFront.classList.remove("shown");        
    }
    
    bgImg.classList.remove("shown");
    
    back.classList.add("active");
    imgBack.classList.add("shown");
}

// activate picture of shirt front
function frontActive(){
    if(back.classList.contains("active")){
        back.classList.remove("active");
        imgBack.classList.remove("shown");        
    }
    
    front.classList.add("active");
    imgFront.classList.add("shown");
    bgImg.classList.remove("shown");

}

// toggle between each view
window.onload = function(){
    document.onclick = function(e){

       if(e.target.id !== 'front'){
            front.classList.remove("active");
            imgFront.classList.remove("shown");  

            if(!back.classList.contains("active")){
                bgImg.classList.add("shown");
            }
      
       }

       if(e.target.id !== 'back'){
            back.classList.remove("active");
            imgBack.classList.remove("shown");
            
            if(!front.classList.contains("active")){
                bgImg.classList.add("shown");
            }
       }
    };
 };


 /* lightbox */
 const fullImg = document.getElementById("fullScreenImg");
 const shirtImage = document.getElementsByClassName("shirtImage");

 const svgIcons = {
    next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
    prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
}

// const shirtViews = {
//     1: ' <img id="imgFront" class="shirtImage" src="../merchPictures/productShirtFront.jpg" alt="">',
//     2: ' <img id="imgBack" class="shirtImage" src="../merchPictures/productShirtBack.jpg" alt="">',
//     3: ' <img id="bgImg" class="shirtImage shown" src="../merchPictures/productShirt.jpg" alt="">'
// }


// open lightbox by clicking on the icon
 function openLightbox(){
    lightboxContainer = document.createElement('div');
    lightboxContainer.id = "lightboxContainer";
    document.body.appendChild(lightboxContainer);

    prevIcon = document.createElement('div');
    prevIcon.id = "prev";
    prevIcon.classList.add("lightboxIcon");
    prevIcon.innerHTML = svgIcons.prev;
    lightboxContainer.appendChild(prevIcon);
    prevIcon.addEventListener('click', () => _moveToPrevious(lightboxImage));


    // open the current activated picture in the lightbox
    for(i = 0; i < shirtImage.length; i++){
        const currentImage = shirtImage[i];

        if(currentImage.classList.contains("shown")){
            lightboxImage = document.createElement('img');
            lightboxImage.id = "lightboxImg";
            lightboxImage.value = i;
            lightboxContainer.appendChild(lightboxImage);
            lightboxImage.src = currentImage.src;


            lightboxContainer.onclick = function(e){
                if(e.target.id !== 'lightboxImg'){
                    if(e.target.id !== 'Capa_1'){
                        document.getElementById('lightboxContainer').remove()
                    }
                }
            }
        }
    }

    nextIcon = document.createElement('div');
    nextIcon.id = "next";
    nextIcon.classList.add("lightboxIcon");
    nextIcon.innerHTML = svgIcons.next;
    lightboxContainer.appendChild(nextIcon);
    nextIcon.addEventListener('click', () => _moveToNext(lightboxImage));
}

function _moveToNext(lightboxImage){
    let x = lightboxImage.value +1;
    if(x === 3){
        x = 0;
    }
    lightboxImage.src = shirtImage[x].src;
    lightboxImage.value = x;
}


function _moveToPrevious(lightboxImage){
    let y = lightboxImage.value -1;
    if(y === -1){
        y = 2;
    }
    lightboxImage.src = shirtImage[y].src;
    lightboxImage.value = y;
}


