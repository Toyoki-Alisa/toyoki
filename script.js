$(function(){

    /*スクロールした際のアニメーション*/
    $('.navigation a').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('html, body').animate({
          'scrollTop': position
        }, 500);
        });
    /*ナビを固定*/
       var navHeight=$('nav').outerHeight(),
            navPos=$('nav').offset().top;
            $(window).on('load scroll',function(){
                var scrollPos=$(this).scrollTop();
                if(scrollPos>navPos){    /*スクロールしたのがナビ要素より大きければadd-navのクラスを追加*/
                    $('nav').addClass('add-nav');
                    $('contents').css('margin-top',navHeight);                    
                }else{
                    $('nav').removeClass('add-nav');
                    $('contents').css('margin-top','0');
                }
            });
    /*モーダル*/
            $("#login-show").click(function(){ /*画像をクリックするとモーダルが出る*/
           $('#modal-in').fadeIn();
       });
       $('.modal-show').click(function(){       /*モーダル、その周りクリックで元に戻る*/
        $('#modal-in').fadeOut();
       });
       $( '#modal-contents' ).on( 'click', function( e ){
        e.stopPropagation();                    /*モーダル画像はクリックしても戻らないように*/
      } );
       $('#login-show').hover((function(){
           $(this).animate({'font-size':'150px'},300);
       }),
       function(){
        $(this).animate({'font-size':'24px'},300);
       });
       $('img.picture').click(function(){
        var ImgSrc =$(this).attr("src");
        var ImgAlt =$(this).attr("alt");
        $('img#main-photo').attr({src:ImgSrc,alt:ImgAlt});        
        $('img#main-photo').hide();
        $('img#main-photo' ).fadeIn();
        return false;
       });
       $("#login-show2").click(function(){ /*画像をクリックするとモーダルが出る*/
        $('#modal-in2').fadeIn();
    });
    $('.modal-show').click(function(){       /*モーダル、その周りクリックで元に戻る*/
     $('#modal-in2').fadeOut();
    });
    $( '#modal-contents2' ).on( 'click', function( e ){
     e.stopPropagation();                    /*モーダル画像はクリックしても戻らないように*/
   } );
    $('#login-show2').hover((function(){
        $(this).animate({'font-size':'150px'},300);
    }),
    function(){
     $(this).animate({'font-size':'24px'},300);
    });
    $('img.picture').click(function(){
     var ImgSrc =$(this).attr("src");
     var ImgAlt =$(this).attr("alt");
     $('img#main-photo2').attr({src:ImgSrc,alt:ImgAlt});        
     $('img#main-photo2').hide();
     $('img#main-photo2' ).fadeIn();
     return false;
    });
});
