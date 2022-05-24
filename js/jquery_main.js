Splitting();

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
