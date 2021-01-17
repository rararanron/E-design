$(function(){
  //drawer js
  $('.drawer' ).drawer()
  
  
  //スクロール

    $('a[href^="#"]').click(function() {
      let header = $(".header").innerHeight();
      //移動速度を指定（ミリ秒）
      let speed = 300;
      //hrefで指定されたidを取得
      let id = $(this).attr("href");
      //isの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = $("#" == id ? "html" : id);
      //ページのトップを基準にターゲットの位置を取得
      let position = $(target).offset().top;
      //ターゲットの位置までspeedの速度で移動
      $("html, body").animate(
        {
          scrollTop: position - $( '#js-header' ).outerHeight()  //ヘッダー分の高さを引いている
        },
        speed
        );
        return false;
      });
  
      
      
      //wow-js
      new WOW().init()
    })
      
      
      //google form
      $( function() {
        let $form = $( '#js-form' )
        $form.submit(function(e) { 
          $.ajax({ 
           url: $form.attr('action'), 
           data: $form.serialize(), 
           type: "POST", 
           dataType: "xml", 
           statusCode: { 
              0: function() { 
                //送信に成功したときの処理 
                $form.slideUp()
                $( '#js-success' ).slideDown()
              }, 
              200: function() { 
                //送信に失敗したときの処理 
                $form.slideUp()
                $( '#js-error' ).slideDown()
              } 
            } 
          });
          return false; 
        }); 
  
  
        
            $('.ripples').ripples({ //波紋をつけたい要素の指定
            resolution: 900, //波紋の広がりの速度（値が大きいほど遅くなる。）
            dropRadius: 7, //波紋の大きさ（値が大きいほど大きくなる。）
            perturbance: 0.05 //波紋による屈折量（値が大きいほどブレる。）
             });
             
        })
      

         