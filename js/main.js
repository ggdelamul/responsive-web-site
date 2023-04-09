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
    let scrollHeight = $(this).scrollTop();
    if (scrollHeight > 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
