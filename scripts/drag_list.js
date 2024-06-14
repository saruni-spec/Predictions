$(function () {
  $(".sortable").sortable();
  $(".sortable").disableSelection();
});

function storePredictions() {
  let predictions = {};

  $(".groups").each(function () {
    let groupName = $(this).find("h3").text().trim().split(" ")[1]; // Get the group letter
    let order = [];

    $(this)
      .find(".sortable li")
      .each(function () {
        order.push($(this).text().trim());
      });

    predictions[groupName] = order;
  });

  console.log(predictions); // For debugging purposes
  localStorage.setItem("predictions", JSON.stringify(predictions));
}
