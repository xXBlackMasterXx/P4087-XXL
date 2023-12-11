// Clear all checked options
document.querySelectorAll(".form-check > input").forEach((button) => {
	button.checked = false;
});

// Get the answers of Q6 where the value is greather than 0%
response.answers.filter(answer => answer.questionCode == "Q6" && Number(answer.value) > 0).forEach((answer) => {
  // Tick the option that coresponds to the answer code
  document.querySelector(`#p_FILTER_2 .form-check > input[value="${answer.code}"]`).checked = true;
});

// Hide the page and go to next question
document.querySelector("body").classList.add("d-none");
document.querySelector("#p_next").click();