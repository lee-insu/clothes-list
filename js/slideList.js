function transformPrev(e) {
    const slidePrev = e.target,
          slideNext = slidePrev.nextElementSibling,
          clothesList = slidePrev.previousElementSibling;

    let activeLi = clothesList.getAttribute('data-position');

    if(Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 220;
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
    console.log('kk');

    if(clothesList.clientWidth < (liList.length * 220 + Number(activeLi))) {
        activeLi = Number(activeLi) - 220;
        slidePrev.classList.add('prev-hover');
        
        if(clothesList.clientWidth > (liList.length * 220 + Number(activeLi))) {
            slideNext.removeEventListener('click',transformNext);
            slideNext.classList.remove('next-hover');
            
        }
        
        slidePrev.addEventListener('click',transformPrev);
    }

    clothesList.style.transition = 'transform 1s'
    clothesList.style.transform = 'translateX('+ Number(activeLi) +'px)';
    clothesList.setAttribute('data-position',activeLi);

}

const slideNextList = document.getElementsByClassName('next');

for (let i = 0; i <slideNextList.length; i++) {
    let clothesList = slideNextList[0].previousElementSibling.previousElementSibling;
    let liList = clothesList.getElementsByTagName('li');
    if(clothesList.clientWidth < (liList.length * 220)) {
        slideNextList[i].addEventListener('click',transformNext);
    }
}