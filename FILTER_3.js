// Clear all checked options
document.querySelectorAll(".form-check > input").forEach((button) => {
	button.checked = false;
});

// Get the answers of question Q13 where "Have visited", "Visit often" and "Favourite retailer"
response.answers.filter(answer => answer.questionCode == "Q13" && ["3","4","5"].includes(answer.columnCode)).forEach((answer) => {
  // Ticks the same answer code for that column in this checkbox
  document.querySelector(`#p_FILTER_3 .form-check > input[value="${answer.rowCode}"]`).checked = true;
})

// If there are no brands selected, choose "None of them"
if(document.querySelectorAll(".form-check > input:checked").length == 0){
    document.querySelector(".form-check > input[value='999']").checked = true;
}

// Hide the page and go to next question
document.querySelector("body").classList.add("d-none");
document.querySelector("#p_next").click();