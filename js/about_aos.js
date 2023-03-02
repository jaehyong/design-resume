$(document).ready(function () {
  $('#fullpage').fullpage({
    sectionsColor: ['#fff', '#e5f7fd', '#fff', "#f1f1f1"],
    css3: true,
    afterLoad: function (anchorLink, index, direction) {
      fp_id = index;
      if (fp_id == 1) {
        sc0_auto();
        sc1_auto_rev();
        sc2_auto_rev();
        sc3_auto_rev();
      } else if (fp_id == 2) {
        sc1_auto();
        sc0_auto_rev();
        sc2_auto_rev();
        sc3_auto_rev();
      } else if (fp_id == 3) {
        sc2_auto();
        sc0_auto_rev();
        sc1_auto_rev();
        sc3_auto_rev();
      } else if (fp_id == 4) {
        sc3_auto();
        sc0_auto_rev();
        sc1_auto_rev();
        sc2_auto_rev();
      }
    }
  });
});

function sc0_auto() {
  $(".sc0_comment").animate({
    "left": 0,
    "opacity": 1
  }, 1000);
  $(".sc0_profile").animate({
    "right": 0,
    "opacity": 1
  }, 1000);
}

function sc0_auto_rev() {
  $(".sc0_comment").animate({
    "left": -200,
    "opacity": 0
  }, 1000);
  $(".sc0_profile").animate({
    "right": -200,
    "opacity": 0
  }, 1000);
}

function sc1_auto() {
  $(".section1_container").addClass("s1c_active");
}

function sc1_auto_rev() {
  $(".section1_container").removeClass("s1c_active");
}

function sc2_auto() {
  $(".skill_progress_active1").addClass("spa1");
  $(".skill_progress_active2").addClass("spa2");
  $(".skill_progress_active3").addClass("spa3");
  $(".skill_progress_active4").addClass("spa4");
  $(".skill_progress_active5").addClass("spa5");
  $(".skill_progress_active6").addClass("spa6");
  $(".skill_progress_active7").addClass("spa7");
  $(".skill_progress_active8").addClass("spa8");
  $(".skill_progress_active9").addClass("spa9");
}

function sc2_auto_rev() {
  $(".skill_progress_active1").removeClass("spa1");
  $(".skill_progress_active2").removeClass("spa2");
  $(".skill_progress_active3").removeClass("spa3");
  $(".skill_progress_active4").removeClass("spa4");
  $(".skill_progress_active5").removeClass("spa5");
  $(".skill_progress_active6").removeClass("spa6");
  $(".skill_progress_active7").removeClass("spa7");
  $(".skill_progress_active8").removeClass("spa8");
  $(".skill_progress_active9").removeClass("spa9");
}

function sc3_auto() {
  $(".vision_comment h2").addClass("vct_active");
  setTimeout(function () {
    $(".vc_box1").addClass("vb_active1");
  }, 500);
  setTimeout(function () {
    $(".vc_box2").addClass("vb_active2");
  }, 1000);
  setTimeout(function () {
    $(".vc_box3").addClass("vb_active3");
  }, 1500);
  setTimeout(function () {
    $(".vc_box4").addClass("vb_active4");
  }, 2000);
  $(".vision_profile").addClass("vp_active");
}

function sc3_auto_rev() {
  $(".vision_comment h2").removeClass("vct_active");
  $(".vc_box1").removeClass("vb_active1");
  $(".vc_box2").removeClass("vb_active2");
  $(".vc_box3").removeClass("vb_active3");
  $(".vc_box4").removeClass("vb_active4");
  $(".vision_profile").removeClass("vp_active");
}