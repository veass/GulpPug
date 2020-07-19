$('.switch-button').click(function(){
  if ($(this).parent().parent().find('.collapse').hasClass('show') == false){
    $($(this).parent().parent()).css({
     'border-bottom':'1px solid #e5e5e5'
    });
    $($(this).parent()).css({
     'border':'0'
    });
    $(this).find('.rotate').css({ 
            'transition': 'transform 0.5s',
            '-o-transform': 'rotate(180deg)',
            '-ms-transform': 'rotate(180deg)',
            '-moz-transform': 'rotate(180deg)',
            '-webkit-transform': 'rotate(180deg)',
            'transform': 'rotate(180deg)'
    });
  }
  else {
    $(this).find('.triple').css({
      'border-bottom': '1px solid #e5e5e5 '
    });
    $(this).find('.rotate').css({
      'transition': 'transform 0.5s',
      '-o-transform': 'rotate(0deg)',
      '-ms-transform': 'rotate(0deg)',
      '-moz-transform': 'rotate(0deg)',
      '-webkit-transform': 'rotate(0deg)',
      'transform': 'rotate(0deg)'
    })
  }
  })

//Trash
let accordion = $('.accordion');
let carousel = $('.carousel');
let carouselInner = $('.carousel-inwner');
let card = $('.card');
let carouselItem = $('.carousel-item')
let active = $('.active')

//adding classes
function adding(){
  carousel.addClass('accordion')
  card.addClass('carouselItem')
}
//removing classes
function removing(){
  accordion.removeClass('carousel')
  carouselItem.removeClass('card')
}

if(($(window).width() >= 360 && $(window).width() <= 480)){
  removing()
}
if(($(window).width() > 480 )){
  adding()
}

$(window).resize(function(){
  if($(window).width() >= 360 && $(window).width()<= 480){
    removing()

  }
  if($(window).width() > 1100){
    sliderBack()
  }
})

//menu 

    $('.ham').click(function(){
      $('nav > ul').toggleClass('menu-open');
    })
//carousel

    // display: block;
    // width: -webkit-max-content;
    // width: -moz-max-content;
    // width: max-content;
    // padding: 9px 0;
    // margin-top: 18px;
    // border-top: 2px solid #000;