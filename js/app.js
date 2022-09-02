$(document).ready(function(){       /* for slider */
$('.slider').slick({
   arrows:false,                    /* for remove next button */
   dots:true,
   appendDots:'.slider-dots',
   dotsClass:'dots'                 /* costom class for unordered list */
});

                                    /* slider section is end */
                                    /* new nav-bar section is start */
                                 
let hamberger =document.querySelector('.hamberger')      /* let is variable is JS */
let times = document.querySelector('.times')     
let mobileNav =document.querySelector('.mobile-nav')  

hamberger.addEventListener('click', function(){          /* event listener i.e clickable function */
  mobileNav.classList.add('open')                        /* dynamicaly open new nav-bar */
});

times.addEventListener('click', function(){              /* event listener i.e clickable function */
  mobileNav.classList.remove('open')                     /* dynamicaly close new nav-bar */
});



});

