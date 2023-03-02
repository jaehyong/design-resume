// //최상단 페이지로 이동하는 버튼
var sch_bottom = 0; 
var sch = 0;

// #main에 bottom 값
sch_bottom = $("main").height() - $(window).height();

$(".top_btn").click(function(){
  $("html").animate({"scrollTop": 0}, 1000);
})

sch_bottom = $("main").height() - $(window).height();

$(window).scroll(function () {
  sch = $(window).scrollTop();
  if(sch > sch_bottom){
    $(".top_btn").addClass("top_btn_stop_active");
  }
  else {
    $(".top_btn").removeClass("top_btn_stop_active");
  }
}); 





