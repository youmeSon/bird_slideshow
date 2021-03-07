'use strict';

const prevBtn = $('.prev');
const nextBtn = $('.next');
let currentImg = 0; //index
let currentPosition = 0;


nextBtn.click(function(){
  let image = $(`[data-index="${currentImg}"]`);
  let imgWidth = image.width();
  console.log(imgWidth);
  currentPosition -= imgWidth;
  $('.carousel-slide').css('transform', `translateX(${currentPosition}px)`);
  currentImg++;
});