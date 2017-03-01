$(document).ready(function(){

      // скролл

      $('a[href*="#"]:not([href="#"])').click(function() {
        $('#hideMenu').slideUp("slow");
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, 1000);
            return false;
          }
        }
      });


      // Випадаюче меню ***********

      $('#dropBut').on('click', function(){
        var status = $("#hideMenu").css("display");
        if(status === "block"){
          $('#hideMenu').slideUp("slow"); 
          return;
         }
         $('#hideMenu').slideDown("slow");
      });


      // закриття меню якщо натиснуто не на кнопку 
      $(document).click(function(event) {
          var tagId = $(event.target).attr('id');
           if ( tagId !== "dropBut") {
            // $('#hideMenu').css("display", "none");
              $('#hideMenu').slideUp("slow");
           }
      });
  // **************
})



 





