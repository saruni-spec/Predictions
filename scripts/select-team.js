function selectTeam(element) {
  // Get all span elements within the parent div
  let siblings = element.parentNode.getElementsByTagName("span");

  // Loop through the span elements and remove the selected class
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove("selected");
  }

  // Add the selected class to the clicked span
  element.classList.add("selected");
}

function storePredictions() {
  let roundName = document.getElementById("roundName").innerText;

  let roundPredictions = {};

  $(".duos").each(function () {
    // Extract the text from the h6 element
    let groupText = $(this).find("h6").text().trim();

    // Extracting group names correctly
    let groupName = groupText.split(" ").join(" ");

    console.log(groupName);

    // Find the selected team and get its text
    let selectedTeam = $(this).find(".selected").text().trim();
    console.log(selectedTeam);
    // Assign the selected team to the group in the predictions object
    roundPredictions[groupName] = selectedTeam;
  });

  console.log(roundPredictions); // For debugging purposes
  localStorage.setItem(roundName, JSON.stringify(roundPredictions));
}
