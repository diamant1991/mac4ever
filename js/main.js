if($('#partners-carousel').length){
  $('#partners-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
}
$('.navbar-toggle').click(function(e) {
  e.preventDefault();
  var menu = $('#nav');
  if(menu.is(':hidden')){
    menu.slideDown(250)
  }
  else{
    menu.slideUp(250)
  }
});