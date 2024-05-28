function createCarousel1(options) {
  options = options || {};
  var margin = options.margin || 0;
  var center = options.center || false;
  var navElement = options.navElement || "div";

  return {
    margin,
    center,
    navElement,
  };
}

createCarousel1(); // {margin: 0, center: false, navElement: "div"}

// 위 아래 코드는 같은 코드이다
function createCarousel2({
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  return {
    margin,
    center,
    navElement,
  };
}

//

const required = (argName) => {
  throw new Error("required is " + argName);
};

function createCarousel3({
  item = required("items"),
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  return {
    margin,
    center,
    navElement,
  };
}
