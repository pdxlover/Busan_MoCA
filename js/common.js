$(document).ready(function () {//시작


  //pc 헤더 스크롤 액션 시작
  /*if($(document).scrollTop() > 100){ 

      $("header").addClass("fixed_header"); //addclass는 자신이 class인줄 알아서 .을 안붙여야함
  }else{
      $("header").removeClass("fixed_header");
  }*///끝




  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
      left: "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".dim").fadeOut();
    $(".mgnb_wrap").animate({
      left: "-100%"
    });
  });//모바일 메뉴 열었다 닫았다 끝


  //mdepth2 메뉴 작동
  $(".mdepth2").hide();
  $(".mgnb > li").click(function () {

    if ($(this).children(".mdepth2").css("display") == "block") {
      $(this).children(".mdepth2").stop().slideUp();
    } else {
      $(".mdepth2").stop().slideUp();
      $(this).children(".mdepth2").stop().slideDown();
    }
  })//mdepth2 메뉴 작동 끝


  //pc depth2 서브 메뉴 작동
  $(".gnb > li").mouseenter(function () {
    $(this).children(".depth2").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $(this).children(".depth2").stop().fadeOut();

  });//pc 서브메뉴 동작 끝



  //서치 박스 모달 팝업
  //body에 gray_layer와 over_layer요소 추가
  $("body").append("<div id='gray_layer'></div><div id='over_layer'></div>");

  //모달 윈도우 실행 취소(닫기)
  $(".search_close").click(function () {
    $("#gray_layer").hide(); //영역 숨김
    $("#over_layer").hide(); //영역 숨김
  }); //실행취소 끝

  //모달 윈도우 실행
  $(".search").click(function () {//모달 윈도우 실행 시작
    $("#gray_layer").show();
    $("#over_layer").show();
    return false;
  });//모달 윈도우 실행 끝




  //모바일 메인 비주얼 스와이퍼 동작
  var mmainslide = new Swiper(".m_main_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
  //모바일 스와이퍼 끝


  //collection swiper 시작
  var collectionlist = new Swiper(".collection_list", {
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    }
  });//collection swiper 끝

  //온라인 예약 사이즈 조절
  $(".book_box").click(function () {
    $(".book_box").removeClass("size");
    $(this).addClass("size");

  });

  //달력 엑티브
  $(".days li").click(function () {
    $(".days li").removeClass("active");
    $(this).addClass("active");
  });


  //입장료 카운트
  var resultElement = $('.count_box .result');

  $(".plus").click(function () {
    var number = $(this).parent(".count_box").find(".result").text();
    number = parseInt(number) + 1;
    $(this).parent(".count_box").find(resultElement).text(number);
  });

  $(".minus").click(function () {
    var number = $(this).parent(".count_box").find(".result").text();

    if (number <= 0) {
      number = parseInt(number);
    } else {
      number = parseInt(number) - 1;
    }
    $(this).parent(".count_box").find(resultElement).text(number);
  });



  //이벤트 모달 팝업 시작

  // Modal을 가져옵니다.
  var modals = document.getElementsByClassName("modal");
  // Modal을 띄우는 클래스 이름을 가져옵니다.
  var btns = document.getElementsByClassName("program_box");
  // Modal을 닫는 close 클래스를 가져옵니다.
  var spanes = document.getElementsByClassName("detail_close");
  var funcs = [];

  // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
  function Modal(num) {
    return function () {
      // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
      btns[num].onclick = function () {
        modals[num].style.display = "block";
        console.log(num);
        $("#gray_layer").show();

        $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }); // 모달팝업 중 html,body의 scroll을 hidden시킴
        $('#element').on('scroll touchmove mousewheel', function (event) { // 터치무브와 마우스휠 스크롤 방지
          event.preventDefault();
          event.stopPropagation();

          return false;
        });

      };

      // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
      spanes[num].onclick = function () {
        modals[num].style.display = "none";
        $("#gray_layer").hide();
        
        $('html, body').css({ 'overflow': 'auto', 'height': '100%' }); //scroll hidden 해제
        $('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능

      };


    };
  }

  // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
  for (var i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
  }

  // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
  for (var j = 0; j < btns.length; j++) {
    funcs[j]();
  }



  //모카이브 클릭시 나타나는 액션
  $(".sharebtn").click(function () {
    $(".share_panel").slideToggle("fast");
  });

  $(".userinfobtn").click(function () {
    $(".userinfobtn_panel").slideToggle("fast");
  });

  $(".rulebtn").click(function () {
    $(".rule_panel").slideToggle("fast");
  });









  AOS.init();







})//끝
