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

// circleBox SVG길이 구하기
$(function () {
  $(".svgAni")
    .find("path")
    .each(function (i, path) {
      let length = path.getTotalLength();
    });
});

// 스크롤 애니메이션
$(function () {
  $(".animate").scrolla({
    mobile: true, // 모바일 버전시 활성화
    once: true, // 스크롤시 딱 한번만 하고 싶을 땐 true
  });
});

// 배경색 변경
$(window).on("scroll resize", function () {
  let scrollTop = $(document).scrollTop();
  bgColor();
  function bgColor() {
    if (scrollTop > 1400) {
      $("body").addClass("on");
    } else {
      $("body").removeClass("on");
    }
    if (scrollTop > 2700) {
      $("body").removeClass("on");
    }
  }
});

// 햄버거 메뉴
$(function () {
  $(".menuOpen button.open").on("click", function () {
    $(".menuOpen .menuWrap").addClass("on");
  });
  $(".menuOpen .menuWrap .close").on("click", function () {
    $(".menuOpen .menuWrap").removeClass("on");
  });
});
