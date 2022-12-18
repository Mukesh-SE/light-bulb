$('document').ready(function(){


   $('button').on('click', ()=>{
      if($('.lights').hasClass('on') && $('.container').hasClass('rot')){

         $('.container').removeClass('rot')
         $('.lights').removeClass('on')
         $(".bulbs").animate({top: "110px"})
         $(".lights").animate({top: "110px"})
      }
      else{
         $('.container').addClass('rot')
         $('.lights').addClass('on')
         $('.bulbs').fadeIn().animate({top: "120px"})
         $(".lights").animate({top: "120px"})
      }

   })


})