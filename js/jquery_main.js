Splitting();

//팝업

const popup = $(".popup");
const btnOneday = popup.find(".oneday");
const btnClose = popup.find(".close");
btnOneday.on("click", function () {
  //popup.hide();
  Cookies.set("oneday", "one", { expires: 1 });
  gsap.to(".popup", {
    duration: 1,
    top: "-100%",
    ease: "back.in",
    onComplete: function () {
      popup.remove();
    },
  });
});
//cookie를 이용
btnClose.on("click", function () {
  //popup.hide();
  gsap.to(".popup", {
    duration: 1,
    top: "-100%",
    ease: "back.in",
    onComplete: function () {
      popup.remove();
    },
  });
});

console.log(Cookies.get("oneday"));
if (Cookies.get("oneday") === "one") {
  popup.hide();
} else {
  popup.show();
}

//top 버튼

//top 버튼 스크롤했을때 보이게
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".btn").fadeIn();
  } else {
    $(".btn").fadeOut();
  }
});

//top 버튼 스르륵 올라오기
$(".btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});

//gnb 버튼 스르륵 올라오기
$(".gnb_home").click(function () {
  $("html, body, about").animate({ scrollTop: 0 }, 400);
  return false;
});
$(".gnb_about").click(function () {
  $("html, body, about").animate({ scrollTop: 880 }, 400);
  return false;
});
$(".gnb_archive").click(function () {
  $("html, body, about").animate({ scrollTop: 1580 }, 400);
  return false;
});
$(".gnb_project").click(function () {
  $("html, body, about").animate({ scrollTop: 2280 }, 400);
  return false;
});

//스크롤시 페이드인

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
    var speed = $($this).attr("data-fade-in-speed") != undefined ? parseInt($($this).attr("data-fade-in-speed")) : 600;
    $($this).animate({ opacity: "1", top: "0px" }, speed, function () {
      $($this).css("position", "static");
      ready = true;
      triggerJqueryFadeInQueue();
    });
  }
}

//gnb 메뉴 스크롤 내리면 색 바뀌기

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 1000) {
//       $(".gnb").css("background", "#666");
//     } else {
//       $(".gnb").css("background", "#343a40");
//     }
//   });
// });

//about, archiving, project 띄울 때 효과

winH = 700;
absolutePos = 2100;

scrollY = 500;
posFromTop = 1000;

//2

var animation = function () {
  var items, winH;

  var initModule = function () {
    items = document.querySelectorAll(".text");
    winH = window.innerHeight;
    _addEventHandlers();
  };

  var _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };

  var _checkPosition = function () {
    for (var i = 0; i < items.length; i++) {
      var posFromTop = items[i].getBoundingClientRect().top;
      if (winH > posFromTop) {
        items[i].classList.add("active");
      }
    }
  };

  return {
    init: initModule,
  };
};

animation().init();
