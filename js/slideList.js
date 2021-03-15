function transformPrev(e) {
    const slidePrev = e.target,
          slideNext = slidePrev.nextElementSibling,
          clothesList = slidePrev.previousElementSibling.children[1];

    let activeLi = clothesList.getAttribute('data-position');

    
}