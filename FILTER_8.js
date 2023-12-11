// Clear all checked options
document.querySelectorAll(".form-check > input").forEach((button) => {
	button.checked = false;
});

// Check row codes from Q13 that where "Aware of", "Have visited", "Visited often" and "Favourite retailer"
response.answers.filter(answer => answer.questionCode == "Q13" && ["2","3","4","5"].includes(answer.columnCode)).forEach((answer) => {
  // Ticks the retailer button
  document.querySelector(`#p_FILTER_8 .form-check > input[value="${answer.rowCode}"]`).checked = true;
});

// If not aware of any brand, choose "None of them"
if(document.querySelectorAll("#p_FILTER_8 .form-check > input:checked").length == 0){
    document.querySelector("#p_FILTER_8 .form-check > input[value='999']").checked = true;
}

// Hide the page and go to next question
document.querySelector("body").classList.add("d-none");
document.querySelector("#p_next").click();