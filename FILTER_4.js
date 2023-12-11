// Clear all checked options
document.querySelectorAll(".form-check > input").forEach((button) => {
	button.checked = false;
});

// Filter rows that have purchased at least once
response.answers.filter(answer => answer.questionCode == "Q16" && ["2","3","4","5","6"].includes(answer.columnCode)).map(answer => {
  document.querySelector(`#p_FILTER_4 .form-check > input[value="${answer.rowCode}"]`).checked = true;
});

// If nothing is filtered, autoclick None of them button
if(document.querySelectorAll(".form-check > input:checked").length == 0){
    document.querySelector(".form-check > input[value='999']").checked = true;
}

// Hide the page and go to next question
document.querySelector("body").classList.add("d-none");
document.querySelector("#p_next").click();