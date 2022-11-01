$('.ventana').hide();

$('#h1-container').click(function () {
  $('#v1').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});

$('#b2').click(function () {
  $('#v2').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});
$('#b3').click(function () {
  $('#v3').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});
$('#b4').click(function () {
  $('#v4').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});

$('#camara-plus_b').click(function () {
  $('#v5').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});

$('#bdatos-plus_b').click(function () {
  $('#v6').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});

$('#control-plus_b').click(function () {
  $('#v7').fadeIn(300).addClass('popup');
  $('#capablanca').fadeIn();
});

$('.cerrar, #capablanca').click(function () {
  $('.ventana').fadeOut(300).removeClass('popup');
  $('#capablanca').fadeOut();
});
