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

//variables
let accordionExample = $('#accordionExample');
let carouselvar = $('.carousel');
let carouselInner = $('.carousel-inner');
let card = $('.card');
let carouselItem = $('.carousel-item')
let active = $('.active')
let carouselExampleCaptions = $('#carouselExampleCaptions')

//adding classes
function carousel(){
  carouselExampleCaptions.addClass('carousel slide pointer-event')
  accordionExample.removeClass('accordion')
  accordionExample.addClass('carousel-inner')
  card.addClass('carousel-item')
}
//accordion classes
function accordion(){
  carouselExampleCaptions.removeClass('carousel slide pointer-event')
  carouselInner.addClass('accordion')
  accordionExample.removeClass('carousel-inner')
  card.removeClass('carousel-item')
}

if(($(window).width() > 480 )){
  accordion()
}

$(window).resize(function(){
  if($(window).width() >= 360 && $(window).width()<= 480){  
    carousel()
  }
  if($(window).width() > 480){
    accordion()
  }
})

//menu 

    $('.ham').click(function(){
      $('nav > ul').toggleClass('menu-open');
    })
