

$(document).ready(function () {
       $("body").keydown(function (event) {
              event.preventDefault();
              document.getElementById(String.fromCharCode(event.which)).play();
              $("#display").text($(`#${String.fromCharCode(event.which)}`).text())
       })
       buttons = document.getElementsByClassName("drum-pad");
       buttons = [...buttons]
       buttons.forEach(button => {
              button.addEventListener("click", function () {
                     document.getElementById(button.value).play();
                     $("#display").text(button.id)
              });
       })
      
});
