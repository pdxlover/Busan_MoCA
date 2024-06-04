$(document).ready(function(){//시작


    //pc 헤더 스크롤 액션 시작
    /*if($(document).scrollTop() > 100){ 

        $("header").addClass("fixed_header"); //addclass는 자신이 class인줄 알아서 .을 안붙여야함
    }else{
        $("header").removeClass("fixed_header");
    }*///끝




    $(".ham").click(function(){
        $(".dim").fadeIn();
        $(".mgnb_wrap").animate({
            left:"0"
        });
    });

    $(".mgnb_close").click(function(){
        $(".dim").fadeOut();
        $(".mgnb_wrap").animate({
            left:"-100%"
        });
    });//모바일 메뉴 열었다 닫았다 끝


    //mdepth2 메뉴 작동
    $(".mdepth2").hide();
    $(".mgnb > li").click(function(){

        if($(this).children(".mdepth2").css("display") == "block"){
            $(this).children(".mdepth2").stop().slideUp();
        }else{
            $(".mdepth2").stop().slideUp();
            $(this).children(".mdepth2").stop().slideDown();
                }
        })//mdepth2 메뉴 작동 끝


        //pc depth2 서브 메뉴 작동
    $(".gnb > li").mouseenter(function(){
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function(){
        $(this).children(".depth2").stop().fadeOut();
        
    });//pc 서브메뉴 동작 끝



    //서치 박스 모달 팝업
     //body에 gray_layer와 over_layer요소 추가
     $("body").append("<div id='gray_layer'></div><div id='over_layer'></div>");

      //모달 윈도우 실행 취소(닫기)
      $(".search_close").click(function(){
        $("#gray_layer").hide(); //영역 숨김
        $("#over_layer").hide(); //영역 숨김
    }); //실행취소 끝

    //모달 윈도우 실행
    $(".search").click(function(){//모달 윈도우 실행 시작
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
        centeredSlides:true,
        slidesPerView:1,
        speed:1000,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints:{
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1200:{
                slidesPerView:3,
                spaceBetween:40,
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
              },
        }
      });//collection swiper 끝

      //온라인 예약 사이즈 조절
      $(".book_box").click(function(){
        $(".book_box").removeClass("size");
        $(this).addClass("size");

      });

      //달력 엑티브
      $(".days li").click(function(){
        $(".days li").removeClass("active");
        $(this).addClass("active");
      });


      //입장료 카운트
      var resultElement = $('.count_box .result');

      $(".plus").click(function(){
        var number = $(this).parent(".count_box").find(".result").text();
        number = parseInt(number) + 1;
        $(this).parent(".count_box").find(resultElement).text(number);
      });

      $(".minus").click(function(){
        var number = $(this).parent(".count_box").find(".result").text();

        if(number <= 0){
          number = parseInt(number);
        }else{
          number = parseInt(number) - 1;
        }
        $(this).parent(".count_box").find(resultElement).text(number);
      });


     




      AOS.init();
    






})//끝
