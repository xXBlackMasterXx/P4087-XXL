document.querySelector("body").style.display = "none";

// Clear all checked options
document.querySelectorAll(".form-check > input").forEach((button) => {
	button.checked = false;
});
document.querySelector("#p_COMPETITOR_1").value = "";

// A function to convert to lowercase
function convertToLowerCase(text) {
  return text.replace(/[A-Z]/g, function (match) {
    return match.toLowerCase();
  });
}

// A list to store the retailers written in Q4
let q4 = [];

// Save the list of retailers written in Q4
response.answers.filter(answer => answer.questionCode == "Q4").forEach((answer) => {
  // Convert to lowercase to standarize and save into the list
  q4.push(convertToLowerCase(answer.value));  
});

// A flag to know if a competitor was found
let foundCompetitor = false;
let index = 0;
while(index < q4.length && foundCompetitor == false) {
  // If XXL is included in the brand retailer list
  if(q4[index].includes("xxl")) {
    // Increment counter to evaluate next fieldtext
    index++;
  } else { // If XXL is not included
    document.querySelector("#p_COMPETITOR_1").value = q4[index];
    document.querySelector(".form-check > input[value='1']").checked = true;
    foundCompetitor = true;
  }
}

// If competitor is not found in Q4
if(foundCompetitor == false){
  // Get the favourite retailer that is not XXL
  let favourite_retailer = response.answers.find(answer => (answer.questionCode == "Q13" && answer.rowCode != "43" && answer.columnCode == "5"));
  // If favourite retailer is found 
  if(favourite_retailer !== undefined){
    // Save the written competitor
    document.querySelector("#p_COMPETITOR_1").value = favourite_retailer.rowLabel;
    // Ticks the Found competitor filter
    document.querySelector(".form-check > input[value='1']").checked = true;
  } else { // If the favourite retailer is not found
    // Tick the Not found completitor filter
    document.querySelector(".form-check > input[value='2']").checked = true;
  }
}

document.querySelector("#p_next").click();