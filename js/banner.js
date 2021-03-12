window.addEventListener('load', function() {

    let moving_px = 20,
        auto_time = 7000,
        slide = document.getElementById('slide'),
        bar = document.createElement('ul'),
        slideList = slide.getElementsByClassName('slide-list'),
        slideCard = slideList[0].getElementsByTagName('li'),
        prevBtn = slide.getElementsByClassName('prev-banner'),
        nextBtn = slide.getElementsByClassName('next-banner'),
        playBtn = slide.getElementsByClassName('play'),
        stopBtn = slide.getElementsByClassName('stop'),
        playSet = null,
        before = 0,
        after = 0,
        moveing = false;




        slideCard[0].style.left = 0;      
        for(let i = 0; i < slideCard.length; i++) {
            bar.innerHTML += '<li></li>';
        };

        bar.classList.add('bar');
        bar.children[0].classList.add('on');
        slide.append(bar);

        for(let j = 0; j<bar.children.length; j++) {
            barClick(j);
        };

    
        playSet = setInterval(playCard,auto_time);
        playBtn[0].style.display = 'none';

        function playCard(){
            if(!moveing) {
                after ++;
                if(after >= slideCard.length) {
                    after = 0;
                    console.log(after)
                };
                move(after,before, 'next');
                before = after;
            };
        };
        
        function barClick(e) {
            bar.children[e].addEventListener('click',function(){
              if(!moveing) {
                after = e;
                if(after > before) {
                    move(after, before, 'next');
                }else if(after < before) {
                    move(after, before);
                };
                before = after;
              }
            });
          }


    const nextBtnSlide = (e) => {
        if(!moveing) {
            after ++;
            if(after >= slideCard.length) {
                after = 0;
            };
            move(after,before, 'next');
            before = after;
        };
    };

    const prevBtnSlide = (e) => {
        if(!moveing) {
            after--;
            if(after < 0) {
                after = slideCard.length -1;
            };
            move(after,before);
            before = after; 
        };
    };

    const playBtnSlide = (e) => {
        playBtn[0].style.display = 'none';
        stopBtn[0].style.display = 'block';
        playSet = setInterval(playCard,auto_time);
    };

    const stopBtnSlide = (e) => {
        playBtn[0].style.display = 'block';
        stopBtn[0].style.display = 'none';
        clearInterval(playSet);
    };

    nextBtn[0].addEventListener('click',nextBtnSlide);
    prevBtn[0].addEventListener('click',prevBtnSlide);
    playBtn[0].addEventListener('click',playBtnSlide);
    stopBtn[0].addEventListener('click',stopBtnSlide);


   function move(after, before, type) {
       let nextX = type === 'next' ? slide.offsetWidth : slide.offsetWidth * -1,
           prevX = 0,
           set = null;
           set = setInterval(moveEvent);

           function moveEvent() {
               moveing = true;
               if(type === 'next') {
                   nextX -= moving_px;
                   slideCard[after].style.left = Number(nextX+10) + 'px';
                   if(nextX <= 0) {
                       clearInterval(set);
                       nextX = slide.offsetWidth;
                       moveing = false;
                       console.log(nextX);
                   };
                   prevX -= moving_px;
               }else {
                   nextX += moving_px;
                   slideCard[after].style.left = Number(nextX-10) + 'px';
                   if(nextX >= 0) {
                    clearInterval(set);
                    nextX = slide.offsetWidth * -1;
                    moveing = false;
                   };
                   prevX += moving_px;
                };
                slideCard[before].style.left = Number(prevX) + 'px';
             };
             bar.children[before].classList.remove('on');
             bar.children[after].classList.add('on');

            };

        });