function productsTabsState() {

  var block = $('.products__block');

  $(document).on('click','.products__tabs-item',function(event){
    $('.products__tabs-item.tab-active').removeClass('tab-active');
    $(this).addClass('tab-active');
    block.eq($('.products__tabs-item').index(this)).addClass('block-active').siblings().removeClass('block-active');
  });
}

function goodsTabsState() {

  var block = $('.products__description');

  $(document).on('click','.products__tabs-item',function(event){
    $('.products__tabs-item.tab-active').removeClass('tab-active');
    $(this).addClass('tab-active');
    block.eq($('.products__tabs-item').index(this)).removeClass('d-none').siblings().addClass('d-none');
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true

        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.news-slider').slick({

    infinite: true,
    slidesToShow: 4,
    prevArrow:'.js-news__left',
    nextArrow:'.js-news__right',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true

        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.goods__slider').slick({

    infinite: true,
    slidesToShow: 4,
    prevArrow:'.js-recent__left',
    nextArrow:'.js-recent__right',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true

        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}

function langMob()
{
  $('.lang__icon').on('click', function(){

    $('.lang__content').slideToggle();

  });
}

function dropdownInit()
{
  $('.hamburger').on('click',function(){

    if($('.hamburger').hasClass('is-active'))
    {
      $('.hamburger').removeClass('is-active');
      $('.menu__list').css('left','-243px');
    }
    else
    {
      $('.hamburger').addClass('is-active');
      $('.menu__list').css('left','-3px');
    }
  });
}

function popupHover()
{  
  $('polygon').on('click',function(event){
    var position = $(event.target).offset();
    $('.map__description-wrapper').css('display','block').offset({top:(position.top - $('.map__description-wrapper').height()/2),left:(position.left - $('.map__description-wrapper').width()/3)});
    
  });
  

}
function popupLeave()
{
  $('.map__description-wrapper').css('display','none');
}
function popupClose()
{
  $('.map__close').on('click',function(){
    $('.map__description-wrapper').css('display','none');
  });
}

function rateInit()
{  
  $('.rate__item').on('click',function(event){

    var limit = $(this).data('rate');    
    var elements = $('.rate__list').children();

    for(var i = 0; i < 5; i++)
    {
      $(elements[i]).find('.rate__icon').css('color','#e8e8e8');
    }

    for(var i = 0; i < limit; i++)
    {
      $(elements[i]).find('.rate__icon').css('color','#ffab00');
    }  

  });
}
function fancyboxInit()
{
  $('.js-fancybox').fancybox();
}


$(document).ready(function($) {

  menuState();
  languageState();
  langMob();
  sliderInit();
  productsTabsState();
  goodsTabsState();
  dropdownInit();
  popupClose();
  popupHover();  
  rateInit();
  fancyboxInit();
});
