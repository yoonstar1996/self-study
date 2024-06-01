// 1. gnb 마우스 오버, 포커스시 밑줄 => span.bar
$(function () {
  $(".gnb li a").on("mouseenter focus", function () {
    let bar = $(this).position().left;
    let widNum = $(this).width();
    $("span.bar").css({ left: bar + "px", width: widNum + "px", opacity: 1 });
  });
  $(".gnb li a").on("mouseleave", function () {
    $("span.bar").css({ left: 0, width: 0, opacity: 0 });
  });
});
