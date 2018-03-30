function tabsState() {

  var block = $('.products__block');

  $(document).on('click','.products__tabs-item',function(event){
    $('.products__tabs-item.tab-active').removeClass('tab-active');
    $(event.target).addClass('tab-active');
    block.eq($('.products__tabs-item').index(this)).addClass('block-active').siblings().removeClass('block-active');
  });

}

function languageState()
{
  
  var item = $('.header__lang-item');

  $('.header__lang-wrapper').on('click',function(event){

    

    if($(event.target).is('.header__lang-select'))
    {
      
      $('.header__lang-list').slideToggle();
    } 
    if($(event.target).is('.header__lang-item'))
    {    
      
      $('.header__lang-select').text($(event.target).text());
    }

    
  });


}

function menuState()
{
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 35) {
      $('.header__main').addClass('fixed-header');
    } else {
      $('.header__main').removeClass('fixed-header');
    }
  });
}

function sliderInit()
{
  $('.slider').slick({

    arrows:false,
    dots:true,
    dotsClass:'slider__indicators',
    draggable:true,
    infinite:true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800
  });
  $('.project-slider').slick({

    infinite: true,
    slidesToShow: 3,
    prevArrow:'.js-projects__left',
    nextArrow:'.js-projects__right',
  });
  $('.news-slider').slick({

    infinite: true,
    slidesToShow: 4,
    prevArrow:'.js-news__left',
    nextArrow:'.js-news__right',
  });
}

$(document).ready(function($) {

  menuState();
  languageState();
  sliderInit();
  tabsState();

});
