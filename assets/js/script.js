$(document).ready(function() {

  
$("#sidebar-button").click(function(){
  if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
  }
  else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $("body").addClass("no-scroll");
      }, 300);
  }
})

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper").click(function(){
  if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
  }
})

});

// $("#ds-info").hide();
// $("#berk-info").hide();
// $("#taiko-info").hide();
// $("#kumon-info").hide();
// $("#cnr-info").hide();
//  $("#ds").click(function(){
//         $("#ds-info").fadeIn(250);
//         $("#berk-info").hide();
//         $("#taiko-info").hide();
//         $("#kumon-info").hide();
//         $("#cnr-info").hide();
//     });

//  $("#berk").click(function(){
//         $("#berk-info").fadeIn(250);
//         $("#ds-info").hide();
//         $("#taiko-info").hide();
//         $("#kumon-info").hide();
//         $("#cnr-info").hide();

//     });

//  $("#taiko").click(function(){
//         $("#taiko-info").fadeIn(250);
//          $("#kumon-info").hide();
//         $("#cnr-info").hide();
//         $("#ds-info").hide();
//         $("#berk-info").hide();
//     });
// $("#cnr").click(function(){
//          $("#cnr-info").fadeIn(250);
//          $("#kumon-info").hide();
//         $("#taiko-info").hide();
//         $("#ds-info").hide();
//         $("#berk-info").hide();


//     });
// $("#kumon").click(function(){
//         $("#kumon-info").fadeIn(250);
//          $("#cnr-info").hide();
//         $("#taiko-info").hide();
//         $("#ds-info").hide();
//         $("#berk-info").hide();
//     });