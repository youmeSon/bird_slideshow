'use strict';

const prevBtn = $('.prev');
const nextBtn = $('.next');
const btn = $('button');
const numOfImg = $('.carousel-slide img').length;
let currentImg = 0; //index
let currentPosition = 0;
let totalWidth = 0;

addEventListener('load', () => {
  for(let i = 0; i < numOfImg-1; i++) {
  let image = document.querySelector(`[data-index="${i}"]`);
  let imageRect = image.getBoundingClientRect();
  let imageWidth = imageRect.width;
    totalWidth += imageWidth;
    console.log(totalWidth);
  }

  btn.click(function(e) {
    let image = $(`[data-index="${currentImg}"]`);
    let imgWidth = image.width();
    console.log(`imgwidth: ${imgWidth}`);
    
    if($(e.target).closest('button').hasClass('next')) {
      currentPosition -= imgWidth;
      currentImg++;
      endSlide();
    } else {
      currentPosition += imgWidth;
      currentImg--;
      endSlide();
    }
    $('.carousel-slide').css('transform', `translateX(${currentPosition}px)`);
    console.log(`currentPosition: ${currentPosition}`);
    console.log(currentImg);
  });
  
  function endSlide() {
    if(currentImg == numOfImg ) {
      currentImg = 0;
      currentPosition = 0;
    } else if (currentImg == -1) {
      currentImg = numOfImg - 1;
      currentPosition = -totalWidth;
    }
  }
})



