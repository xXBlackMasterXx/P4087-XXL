document.querySelector("body").style.display = "none";

// Clear all checked options
document.querySelectorAll(".form-check > input").forEach((button) => {
	button.checked = false;
});

// Función para obtener hasta n elementos aleatorios de un array
function getRandomElementsFromArray(array, n) {
  const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, n);
}

let q17 = [];
let q13 = [];

response.answers.forEach((answer) => {
  // Get responses from Q17
  if (answer.questionCode == "Q17" && answer.columnCode == "2") {
    q17.push(answer.rowCode);
  }

  // Get answer codes from Q13 that were Have visited, Visiten often or Favourite retailer.
  if (answer.questionCode == "Q13" && ["3", "4", "5"].includes(answer.columnCode)) {
    q13.push(answer.rowCode);
  }
});

// Eliminate duplicates from Q17 answer codes
q17 = [...new Set(q17)];

let filteredAnswerCodes = q17.filter((answer) => q13.includes(answer));

// Check and mark the appropriate checkboxes
if (filteredAnswerCodes.includes("43")) {
  // If "43" is in the list, remove it and then select up to two additional elements randomly
  filteredAnswerCodes.splice(filteredAnswerCodes.indexOf("43"), 1);
  const remainingSlots = 3 - 1; // We subtract 1 as the "43" is already selected
  const selectedCodes = ["43", ...getRandomElementsFromArray(filteredAnswerCodes, remainingSlots)];
  selectedCodes.forEach((answerCode) => {
    document.querySelector(`.form-check > input[value='${answerCode}']`).checked = true;
  });
} else {
  // If "43" is not in the list, select up to three elements randomly from the filtered list
  const selectedCodes = getRandomElementsFromArray(filteredAnswerCodes, 3);
  selectedCodes.forEach((answerCode) => {
    document.querySelector(`.form-check > input[value='${answerCode}']`).checked = true;
  });
}

if(document.querySelectorAll(".form-check > input:checked").length == 0){
    document.querySelector(".form-check > input[value='999']").checked = true;
}

document.querySelector("#p_next").click();