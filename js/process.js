var sch_bottom = 0;
var sch = 0;
var sch_active = 0;

sch_bottom = $("#process").height() - $(window).height();

$(window).scroll(function () {
  sch = $(window).scrollTop();
  if(sch > sch_bottom){
    $(".top_btn").addClass("top_btn_stop_active");
  }
  else {
    $(".top_btn").removeClass("top_btn_stop_active");
  }
}); 

$(window).scroll(function () {
  sch_active = $(window).scrollTop();
  if(sch_active > 100){
    $(".top_btn").addClass("top_btn_active");
  }
  else {
    $(".top_btn").removeClass("top_btn_active");
  }
}); 

$(".top_btn").click(function(){
  $("html").animate({"scrollTop": 0}, 1000);
})