$(document).ready(function(){
  $("#startbutton").click(function(){

    var number = 50;
    alert("The let game begin!");
    $("#startbutton").on("click", start);   
    $("#submit").on("click", finish);  
    $("#playagain").on("click", restart);  

    function start(){
      counter = setInterval(timer, 1000);
      showMe(".questions");
      showMe(".options");
      showMe("#submit");
      hideMe("#startbutton");
      hideMe(".howitworks");
      hideMe("#playagain");
      hideMe("#results");
    }
    function timer(){
      number-- 
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); 
      }
    }
    function stop(){
      clearInterval(counter); 
      $("#results").show();
      $("#restart").show();
    $(".questions").hide();
    $(".options").hide();
    $("#submit").hide();
    }
    function finish(){
      number = 1; 
      clearInterval(counter); 
      timer();
    }

    function restart(){
      number = 50;
      start();
    }

    function hideMe(e) {
      $(e).hide();
    }
    function showMe(e) {
      $(e).show();
    }

// ----------------------------------------------------------------
//calling functions
    start(); // calls the start function
    });
});

  