$(document).ready(function () {
  //nav slide toggle
  $(".icone").on("click", function () {
    $(".nav-list").slideToggle();
    if ($("header").attr("class") == "sticky") {
      $("header").removeClass("sticky");
    } else {
      $("header").addClass("sticky");
    }
  });
  // sticky nav bar
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    // console.log(sc);
    if (sc > 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
