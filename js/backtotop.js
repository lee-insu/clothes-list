const backtotop = document.getElementById('backtotop');

function showScroll() {
    let pageYOffSet = window.pageYOffset;
    if (pageYOffSet !== 0) {
        backtotop.classList.add('show');
    }else {
        backtotop.classList.remove('show');
    }
}


function topScroll() {
    if(window.pageYOffset > 0) {
        window.scrollTo({top:0, behavior:'smooth'})
    }
}

window.addEventListener('scroll',showScroll);
backtotop.addEventListener('click',topScroll);