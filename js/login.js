$(document).ready(function () {
    $(".contenedor-formularios")
      .find("input, textarea")
      .on("keyup blur focus", function (e) {
       let $this = $(this),
          label = $this.prev("label");
  
        if (e.type === "keyup") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.addClass("active highlight");
          }
        } else if (e.type === "blur") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.removeClass("highlight");
          }
        } else if (e.type === "focus") {
          if ($this.val() === "") {
            label.removeClass("highlight");
          } else if ($this.val() !== "") {
            label.addClass("highlight");
          }
        }
      });
  
    $(".tab a").on("click", function (e) {
      e.preventDefault();
  
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
  
      target = $(this).attr("href");
  
      $(".contenido-tab > div").not(target).hide();
  
      $(target).fadeIn(600);
    });
  });
  
  $(document).ready(function(){
    $('#registration').submit(function(event){
  
      event.preventDefault();
  
      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function(data){
          alert("Registracion exitosa")
        },
        error: function(data){
          alert("Problemas al tratar de enviar el formulario")
        }
      })
    })
  });


  
