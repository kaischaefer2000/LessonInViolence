const $back = document.getElementById("back");
const $front = document.getElementById("front");

const $bgImg = document.getElementById("bgImg");
const $imgFront = document.getElementById("imgFront");
const $imgBack = document.getElementById("imgBack");

function backActive(){
    if($front.classList.contains("active")){
        $front.classList.remove("active");
        $imgFront.classList.remove("shown");        
    }
    
    $back.classList.add("active");
    $imgBack.classList.add("shown");
}

function frontActive(){
    if($back.classList.contains("active")){
        $back.classList.remove("active");
        $imgBack.classList.remove("shown");        
    }
    
    $front.classList.add("active");
    $imgFront.classList.add("shown");
}

window.onload = function(){
    document.onclick = function(e){
       if(e.target.id !== 'front'){
            $front.classList.remove("active");
            $imgFront.classList.remove("shown");  
      
       }

       if(e.target.id !== 'back'){
            $back.classList.remove("active");
            $imgBack.classList.remove("shown"); 
       }
    };
 };




 /* lightbox */

 const $fullImg = document.getElementById("fullScreenImg");
 const $shirtImage = document.getElementsByClassName("shirtImage");

 function openLightbox(){
    lightboxContainer = document.createElement('div');
    lightboxContainer.id = "lightboxContainer";
    document.body.appendChild(lightboxContainer);

    for($i = 0; $i < $shirtImage.length; $i++){
        const $currentImage = $shirtImage[$i];
        if($currentImage.classList.contains("shown")){
            lightboxImage = document.createElement('img');
            lightboxImage.id = "lightboxImg";
            // lightboxImage.classList.add('imgInLightbox');
            lightboxContainer.appendChild(lightboxImage);
            lightboxImage.src = $currentImage.src;


            lightboxContainer.onclick = function(e){
                if(e.target.id !== 'lightboxImg'){
                    document.getElementById('lightboxContainer').remove()
                }
            }
        }
    }
}

