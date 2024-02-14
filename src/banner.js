function change() {
    var dropDown = document.getElementById("dropDown");
    if (dropDown.classList.contains("hidden")) {
      dropDown.classList.remove("hidden");
    } else {
      dropDown.classList.add("hidden");
    }
  }


currentSlideID = 1;

sliderElement = document.getElementById( 'slider' );

totalSlides = sliderElement.childElementCount;


function next(){
    if (currentSlideID < totalSlides) {
        currentSlideID++;                
        showSlide();
    }  
}

function prev(){
    if (currentSlideID > 1) {
        currentSlideID--;                
        showSlide();
    }
}

function showSlide(){
    slides = document.getElementById('slider').getElementsByTagName('li') 
    for (let index = 0; index < totalSlides; index++) {                          
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
    }

}


//product 

let sliderContainer = document.getElementById( "sliderContainer-1" );
let slider = document.getElementById( "slider-1" );
let cards = document.getElementsByClassName( "li" );


let elementsToShow = 3;

let sliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = cards.length*cardWidth + 'px';
slider.style.transition = "margin";
slider.style.transitionDuration = "1s"

for (let  index=0; index<cards.length; index++){
    const element = cards[index];
    element.style.width = cardWidth+'px';
};

function prev_1(){
    //console.log(+slider.style.marginLeft.slice(0,-2));
    //console.log(-cardWidth*(cards.length-elementsToShow))

    if(+slider.style.marginLeft.slice(0,-2)!=-cardWidth*(cards.length-elementsToShow))
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}

function next_1() {
    if(+slider.style.marginLeft.slice(0,-2) !=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) + cardWidth ) + 'px';
    
}



