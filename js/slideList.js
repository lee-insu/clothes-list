function transformPrev(e) {
    const slidePrev = e.target,
          slideNext = slidePrev.nextElementSibling,
          clothesList = slidePrev.previousElementSibling;

    let activeLi = clothesList.getAttribute('data-position');

    if(Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 235;
        slideNext.addEventListener('click',transformNext);
        slideNext.classList.add('next-hover');

        if(Number(activeLi) === 0) {
            slidePrev.classList.remove('prev-hover');
            slidePrev.removeEventListener('click',transformPrev);
        }
    }

    clothesList.style.transition = 'transform 1s'
    clothesList.style.transform = 'translateX('+ Number(activeLi) +'px)';
    clothesList.setAttribute('data-position',activeLi);
}



function transformNext(e) {
    const slideNext = e.target,
          slidePrev = slideNext.previousElementSibling,
          clothesList = slideNext.previousElementSibling.previousElementSibling,
          liList = clothesList.getElementsByTagName('li');

    let activeLi = clothesList.getAttribute('data-position');


    if(clothesList.clientWidth < (liList.length * 235 + Number(activeLi))) {
        activeLi = Number(activeLi) - 235;
        slidePrev.classList.add('prev-hover');
      
        
        if(clothesList.clientWidth > (liList.length * 235 + Number(activeLi))) {
            slideNext.removeEventListener('click',transformNext);
            slideNext.classList.remove('next-hover');
            
        }
        
        slidePrev.addEventListener('click',transformPrev);
    } 

    clothesList.style.transition = 'transform 1s'
    clothesList.style.transform = 'translateX('+ Number(activeLi) +'px)';
    clothesList.setAttribute('data-position',activeLi);

}

const slideNextArrow = document.getElementsByClassName('next');

for (let i = 0; i <slideNextArrow.length; i++) {
    let clothesList = slideNextArrow[i].previousElementSibling.previousElementSibling;
    let liList = clothesList.getElementsByTagName('li');
    if(clothesList.clientWidth < (liList.length * 235)) {
        slideNextArrow[i].addEventListener('click',transformNext);
    } else {
        const removeArrow = slideNextArrow[i].parentElement;
        removeArrow.removeChild(slideNextArrow[i].previousElementSibling);
        removeArrow.removeChild(slideNextArrow[i]);
    
    }
}