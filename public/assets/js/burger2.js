$(function () {

  //User clicked on the burger order button
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    //get the burger name
    var newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };

    //call the api to add the new burger
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {

      //log our success
      console.log("Added new burger");

      //reload our data to ensure UI is current
      location.reload();
    });
  });

  //user has clicked the check mark to eat the burger
  $(".eatburger").on("click", function (event) {

    //detect double click
    event.preventDefault();

    //get the burger ID
    var id = $(this).data("id");

    //change the devoured state to true
    var devouredState = {
      devoured: 1
    };

    //call the update to move the burger to the devour list
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {

      //log our success
      console.log("Burger devoured");

      //reload our data to ensure UI is current
      location.reload();
    });
  });

  //User wants to delete the burger from the list
  $(".burgerdelete").on("click", function (event) {

    //double click check
    event.preventDefault();

    //get the burger ID
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(

      //reload our data to ensure UI is current
      location.reload()
    );
  });
});