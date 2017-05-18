                  // THE JS THAT SWAPS THE NAVBAR
function collapseNavbar() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  }
  else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}  

$(window).scroll(function slide() {
  $(".info").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

$(window).scroll(function slide() {
  $(".sub").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide-glyphicon");
    }
  });
});
// $(window).scroll(slide);
// $(document).ready(slide);
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);