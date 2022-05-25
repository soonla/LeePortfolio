$(document).ready(function () {
  $(".fade-in").css({ opacity: "0", position: "relative", top: "30px" });
  triggerJqueryFadeIn();
  $(window).scroll(triggerJqueryFadeIn);
});
var animateQueue = new Array();
var ready = true;
function triggerJqueryFadeIn() {
  $(".fade-in").each(function () {
    var object_top = $(this).offset().top;
    var window_bottom = $(window).scrollTop() + $(window).height();
    if (window_bottom > object_top) {
      if ($(this).css("opacity") == "0") animateQueue.push(this);
    }
  });
  triggerJqueryFadeInQueue();
}
function triggerJqueryFadeInQueue() {
  if (animateQueue.length != 0 && ready) {
    ready = false;
    $this = animateQueue.shift();
    var speed = $($this).attr("data-fade-in-speed") != undefined ? parseInt($($this).attr("data-fade-in-speed")) : 500;
    $($this).animate({ opacity: "1", top: "0px" }, speed, function () {
      $($this).css("position", "static");
      ready = true;
      triggerJqueryFadeInQueue();
    });
  }
}
