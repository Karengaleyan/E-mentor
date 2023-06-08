$(document).ready(function () {
   $('.question__icon').click(function () {
      let $container = $(this).closest('.question');

      $container.toggleClass('active');
      $container.find('.question__text').slideToggle();
   });
});

$('.burger').click(function () {
   $('.site-menu').stop().fadeToggle();
   $('.burger').toggleClass('active');
});
