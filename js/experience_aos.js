var ex_hi = 0;

$(window).scroll(function () {
  ex_hi = $(window).scrollTop();
  if(ex_hi > 2020){
    $(".footer_container").addClass("fc_active");
  }
  else if(ex_hi > 1430){
    $(".travel_container").addClass("tc_active");
  }
  else if(ex_hi > 800){
    $(".visual_title").removeClass("vt_active");
  }
  else if(ex_hi > 770){
    $(".overseas_container").addClass("oc_active");
  }
  else if(ex_hi > 600){
    $(".visual_title").addClass("vt_active");
  }
  else if(ex_hi > 120){
    $(".school_container").addClass("sc_active");
  }
  else if(ex_hi > 100){
    $(".top_btn").addClass("top_btn_active");
  }
  else {
    $(".top_btn").removeClass("top_btn_active");
    $(".school_container").removeClass("sc_active");
    $(".overseas_container").removeClass("oc_active");
    $(".travel_container").removeClass("tc_active");
  }
}); 

$("html").ready(function(){
  $(".visual_title").addClass("vt_active");
})
