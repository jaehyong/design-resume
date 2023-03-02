var pt_num = 0;
var pt_slide_timer = 0;

function pt_slide_auto(){
  $(".portfolio_slide_move_box").animate({"left": -405}, 1000, function(){
    $(".portfolio_slide_contents_box:first-of-type")
    .appendTo(".portfolio_slide_move_box");
    $(".portfolio_slide_move_box").css({"left": 0}).stop();
  });
}

function pt_slide_rev(){
  $(".portfolio_slide_contents_box:last-of-type")
  .prependTo(".portfolio_slide_move_box");
  $(".portfolio_slide_move_box").css({"left": -405}).stop();
  $(".portfolio_slide_move_box").animate({"left": 0}, 1000);
}

pt_slide_timer = setInterval("pt_slide_auto()", 5000);

$(".pt_prev_btn").click(function(){
  clearInterval(pt_slide_timer);
  $(".pt_stop_btn").css({"display": "none"});
  $(".pt_play_btn").css({"display": "block"});
  pt_slide_rev();
})

$(".pt_stop_btn").click(function(){
  $(".pt_stop_btn").css({"display": "none"});
  $(".pt_play_btn").css({"display": "block"});
  clearInterval(pt_slide_timer);
})

$(".pt_play_btn").click(function(){
  $(".pt_play_btn").css({"display": "none"});
  $(".pt_stop_btn").css({"display": "block"});
  setInterval("pt_slide_auto()", 5000);
})

$(".pt_next_btn").click(function(){
  clearInterval(pt_slide_timer);
  $(".pt_stop_btn").css({"display": "none"});
  $(".pt_play_btn").css({"display": "block"});
  pt_slide_auto();
})

$(".portfolio_slide_move_box").hover(
  function(){
    clearInterval(pt_slide_timer);
    $(".pt_stop_btn").css({"display": "none"});
    $(".pt_play_btn").css({"display": "block"});
  },
  function(){
    pt_slide_timer = setInterval("pt_slide_auto()", 5000);
    $(".pt_play_btn").css({"display": "none"});
    $(".pt_stop_btn").css({"display": "block"});
  }
)

