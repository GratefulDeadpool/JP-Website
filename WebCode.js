$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  var img = $('#pic');
  var imgHeight = img.height();

  if (scroll >= imgHeight) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$("#aboutMenu").click(function() {
    $('html,body').animate({
        scrollTop: $("#subtitle2").offset().top},
        1000);
});
$("#menuMenu").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutIMG").offset().top},
        1000);
});
$("#breakfast").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutIMG").offset().top},
        1000);
});
$("#onlineMenu").click(function() {
    $('html,body').animate({
        scrollTop: $("#menuIMG").offset().top},
        1000);
});
$("#locationMenu").click(function() {
    $('html,body').animate({
        scrollTop: $("#onlineIMG").offset().top},
        1000);
});
$("#contactMenu").click(function() {
    $('html,body').animate({
        scrollTop: $("#googleMap").offset().top},
        1000);
});

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(26.011400, -80.161028),
    zoom:19,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}