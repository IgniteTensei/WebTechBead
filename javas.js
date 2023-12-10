

$(document).ready(function () {
    /*$("#pic*").mouseenter(function () {
        $(this).animate({ height: "120%", width: "120%"});
    });
    $("#pic*").mouseleave(function () {
        $(this).animate({ height: "70%", width: "70%"});
    });*/
    $(".pagepic").mouseenter(function () {
        //$(this).css('z-index', 1);
        //$(this).zIndex(1);
        $(this).animate({ height: "120%", width: "120%"});
    });
    $(".pagepic").mouseleave(function () {
        //$(this).css('z-index', 0)
        //$(this).zIndex(0);
        $(this).animate({ height: "70%", width: "70%"});
    });
    $("#menuicon").mouseenter(function(){
        openNav();
    });
    $("#mySidenav").mouseleave(function(){
        closeNav();
    });
  
    $("#rendeles").click(function () {
        var lastName=$("#lastName").val();
        var firstName=$("#firstName").val();
        var email=$("#email").val();
        var bday=$("#bday").val();
        var city=$("#city").val();
        var postal=$("#postal").val();
        var address=$("#address").val();
        var countries=$("#countries").val();

        if(lastName==""){
            alert("Nem lett megadva vezetéknév!");
            $("#lastName").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#lastName").css('border','2px solid #000000');
            
        }

        if(firstName==""){
            alert("Nem lett megadva keresztnév!");
            $("#firstName").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#firstName").css('border','2px solid #000000');
            
        }

        if(email==""){
            alert("Nem lett megadva email!");
            $("#email").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#email").css('border','2px solid #000000');
            
        }

        if(bday==""){
            alert("Nem lett megadva születési dátum!");
            $("#bday").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#bday").css('border','2px solid #000000');
            
        }

        if(city==""){
            alert("Nem lett megadva email!");
            $("#city").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#city").css('border','2px solid #000000');
            
        }

        if(postal==""){
            alert("Nem lett megadva email!");
            $("#postal").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#postal").css('border','2px solid #000000');
            
        }

        if(address==""){
            alert("Nem lett megadva email!");
            $("#address").css('border','2px solid #ff0000');
            return;
        }
        else{
            $("#address").css('border','2px solid #000000');
            
        }
       
        return;
    });
    
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "13%";
    document.getElementById("main").style.marginLeft = "13%";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }