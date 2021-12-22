$(document).ready(function () { 

  $(".size__item").click(function () {
    if ($(this).hasClass("none-active-size")) {
      return
    }
    else {
      $(".size__item").removeClass("active-size");
    $(this).addClass("active-size");
    }
  });

  $(".palette__item").click(function () {
    $(".palette__item").removeClass("active-color");
    $(this).addClass("active-color");
    let colorName = $(this).data("color");
    $(".tshirt-color").removeClass("active");
    let tshirt = $(".tshirt-color." + colorName);
    console.log(tshirt);
    tshirt.addClass("active");
  });

  
  $(".filter__link").click(function () {
    $(".info").removeClass("active");
    $(".filter__item").removeClass("filter__item--active");
    let filter = $(this).data("filter");
    $("." + filter).addClass("active");
    $(this).closest(".filter__item").addClass("filter__item--active");
  })


});