//wait to attach handlers until DOM is fully loaded
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("neweaten");
  
      var eatenState = {
        devoured: newEaten
      };
  
      //send PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenState
      }).then(
        function() {
          console.log("Changed to", newEaten);
          //reload page to get updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      //preventDefault on submit event
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim(),
      };
  
      //send POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new Burger");
          //reload page to get updated list
          location.reload();
        }
      );
    });
  });