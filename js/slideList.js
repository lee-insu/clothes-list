function transformPrev(e) {
    const slidePrev = e.target,
          slideNext = slidePrev.nextElementSibling,
          clothesList = slidePrev.previousElementSibling.children[1];

    let activeLi = clothesList.getAttribute('data-position');

    if(Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 220;
        slideNext.addEventListener('click',transformNext);
        slideNext.classList.add('next-hover');

        if(Number(activeLi) === 0) {
            slidePrev.classList.remove('prev-hover');
            slidePrev.removeEventLister('click',transformPrev);
        }
    }

    clothesList.style.transition = 'transform 1s'
    clothesList.style.transform = 'translateX('+ Number(activeLi) +'px)';
    clothesList.setAttribute('data-position',activeLi);
}


function transformNext(e) {
    const slideNext = e.target,
          slidePrev = slideNext.previousElementSibling,
          clothesList = slideNext.previousElementSibling.previousElementSibling.children[1],
          liList = clothesList.getElementsByTagName('li');

    let activeLi = clothesList.getAttribute('data-position');

    if(clothesList.clientWidth < (liList.length * 355 + Number(activeLi))) {
        activeLi = Number(activeLi) - 355;
        slidePrev.classList.add('prev-hover');
        
        if(clothesList.clientWidth > (liList.length * 355 + Number(activeLi))) {
            slideNext.removeEventListener('click',transformNext);
            slideNext.classList.remove('next-hover');
            
        }
        
        slidePrev.addEventListener('click',transformPrev);
    }

    clothesList.style.transition = 'transform 1s'
    clothesList.style.transform = 'translateX('+ Number(activeLi) +'px)';
    clothesList.setAttribute('data-position',activeLi);

}