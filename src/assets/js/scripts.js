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

 
  // Regroup our blocks\
let header = $('header');
let news = $('.button-news');
let contentBlock = $('.content-block');

function resizeForheader(){
  $('.ham').css({'display':'block'});
  news.detach()
  $('.news-active__bottom').append(news);
  news.css({
    'text-align': 'center',
    'padding': '16px 0',
    'border': '1px solid',
    'margin-top': '50px'
  })
  news.find('span').html('Все новости')
                   .css({'font-size': '14px'})
  $('.news-active__bottom').removeClass('flex-row');
  $('.news-active__bottom').addClass('flex-column');
  $('.new-item svg').detach();    
}
function getBacktoheader(){
  $('.news-active__bottom').removeClass('flex-column');
  $('.news-active__bottom').addClass('flex-row');
  $('.news-active__top').append(news);
  news.css({
    'border-top': '1px solid',
    'margin-top': '0px'
  })

}

  // if(($(window).width() >= 360 && $(window).width() <= 1100)){
  //   resizeForheader();
    
  // }

  // $(window).resize(function(){
  //   if($(window).width() >= 360 && $(window).width()<= 1100){
  //     resizeForheader();

  //   }
  //   if($(window).width() > 1100){
  //     getBacktoheader();
  //   }
  // })

//menu 

    $('.ham').click(function(){
      $('nav > ul').toggleClass('menu-open');
    })

