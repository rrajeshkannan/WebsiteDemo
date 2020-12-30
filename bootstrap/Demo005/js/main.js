$('.navbar a').click(function () {
  $('body,html').animate(
    {
      scrollTop: $('#' + $(this).data('value')).offset().top,
    },
    50
  );
});

$(document).ready(function () {
  $('.header').height($(window).height());
});
