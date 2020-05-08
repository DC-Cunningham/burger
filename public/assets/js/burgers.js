// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eaten").on("click", function (event) {
    const id = $(this).data("id");
    const newEat = $(this).data("neweat");

    const newEatenState = {
      devoured: newEat,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState,
    }).then(function () {
      console.log("changed eaten state to", newEat);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
});
