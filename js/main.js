$(document).ready(function() {

// ELEMENTS
  var $body = $("body");
  var $container = $(".container");
  var $scramble = $(".scramble");
  var $input = $(".input");
  var $notice = $(".notice");
  var $buttons = $(".button");
  var $options = $(".options-box");

// OTHER GLOBALS
  var optionsOpen = false;

// DEMO SCRAMBLE
  $scramble.scramble(3000, 20, "alphabet", true);

// HELPERS
  var toBoolean = function(input) {
    return input === 'true' ? true : false;
  };

  var scrambleDemo = function() {
    input = $input.val() === "" ? "Text deScrambler" : $input.val();
    duration = Number($(".duration").eq(0).val());
    interval = Number($(".interval").eq(0).val());
    uppercase = toBoolean($("input[name=uppercase]:checked").val());
    characterSet = $("input[name=character-set]:checked").val();
    $scramble.text(input);
    $scramble.scramble(duration, interval, characterSet, uppercase);
  };

// LISTENERS
  // button click (scramble or options)
  $buttons.on("click", function() {
    // SCRAMBLE button
    if ($(this).attr("value") === "scramble") {
      scrambleDemo();
      // OPTIONS button
    } else if ($(this).attr("value") === "options") {
      if (!optionsOpen) {
        $options.animate({
          top: "-90px"
        });
      } else {
        $options.animate({
          top: "-400px"
        });
      }
      optionsOpen = !optionsOpen;
    }
  });

  // enter keydown
  $input.on("keydown", function(e) {
    if (e.keyCode === 13) {
      $notice.fadeOut(500, function() {
        $notice.text("");
      });
      scrambleDemo();
    } else {
      if ($input.val().length > 18) {
        $notice.text("Just press enter, already.");
        $notice.fadeIn();
      }
    }
  });

  // 섹션6 커서
  $(".section6").on("mousemove",function(e){
    let x = (e.pageX - $(this).offset().left) - ($(".pointer").width() / 2);
    let y = (e.pageY - $(this).offset().top) - ($(".pointer").height() / 2);

    // 위치 초과 픽스
    // if(x <= 0) x = 0;
    // if(x + $(".pointer").width() >= $(this).outerWidth()) x = $(this).outerWidth() - $(".pointer").width() / 2;
    // if(y <= 0) y = 0;
    // if(y + $(".pointer").height() >= $(this).outerHeight()) y = $(this).outerHeight() - $(".pointer").height() / 2;
    
    $(".pointer").css({
      "top" : y + "px",
      "left" : x + "px"
    })
  })
  .on("click",function(e){
    const sound = new Audio("./sound/effect_sound.mp3");
    sound.volume = 0.5;
    sound.play();
  })

    // GNB 클릭 시 섹션 이동
    $(".header .header_nav01 > a").on("click",function(){
      let st = $($(this).attr("href")).offset().top;
      $("html, body").animate({scrollTop : st}, 0)
      return false;
    })

  // 스크롤에 따른 헤더 활성화
  $(window).scroll(function(){
    let st = $(window).scrollTop();

    if(st >= 0 && st < $("#sss1").height() - $(window).height() / 2){
      $(".header_nav01").eq(0).addClass("active").siblings(".header_nav01").removeClass("active");
    }

    else if(st >= $("#sss1").height() - $(window).height() / 2 && st < $(".section2").offset().top + $(window).height() / 2){
      $(".header_nav01").eq(1).addClass("active").siblings(".header_nav01").removeClass("active");
    }

    else if(st >= $(".section2").offset().top + $(window).height() / 2 && st < $(".section3").offset().top + $(window).height() / 2){
      $(".header_nav01").eq(2).addClass("active").siblings(".header_nav01").removeClass("active");
    }

    else if(st >= $(".section3").offset().top + $(window).height() / 2 && st < $(".section4").offset().top + $(window).height() / 2){
      $(".header_nav01").eq(3).addClass("active").siblings(".header_nav01").removeClass("active");
    }

    else if(st >= $(".section4").offset().top + $(window).height() / 2 && st < $(".section5").offset().top + $(window).height() / 2){
      $(".header_nav01").eq(4).addClass("active").siblings(".header_nav01").removeClass("active");
    }

    else if(st >= $(".section5").offset().top + $(window).height() / 2 && st < $(".section7").offset().top + $(window).height() / 2){
      $(".header_nav01").eq(5).addClass("active").siblings(".header_nav01").removeClass("active");
    }
  })

});


// 햄버거
$(function(){

  $("#slide-open").click(function(){
    
   if($("#burgur").hasClass('on')){
   //메뉴버튼이 "on" 클래스를 포함할 경우 "on"클래스를 제거
   $("html").css('overflow','auto')
     $("#burgur").removeClass('on');
     $(".side_menubar-box").fadeOut().removeClass('on')
  


   }else{
   //메뉴버튼이 "on" 클래스를 포함하지 않을 경우 "on"클래스를 추가
   $("html").css('overflow','hidden')
    $("#burgur").addClass('on');
    $(".side_menubar-box").fadeIn();
    setTimeout(function(){
      $(".side_menubar-box").addClass("on");
    },30)

   }   





   
  });
});



// 햄버거 메뉴 슬라이다
$("#slide-open").click(function(){  //버튼 클릭 시

  if($("#burgur").hasClass('on')){ //메뉴가 X 상태일때
  
    $("#burgur").removeClass('on'); //메뉴 원복
    $("#slide").removeClass('on');  //슬라이드 메뉴 원복
   
  } else{
  
    $("#burgur").addClass('on');    //메뉴 3줄
    $("#slide").addClass('on');     //슬라이드 메뉴 감춤
   
  }
});




