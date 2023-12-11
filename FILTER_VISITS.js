document.querySelector("body").style.display = "none";

// Your existing code to filter visited stores
let visited_physical_store = response.answers.filter(answer => answer.questionCode == "Q14" && ["2","3","4","5","6"].includes(answer.columnCode));
let visited_online_store = response.answers.filter(answer => answer.questionCode == "Q15" && ["2","3","4","5","6"].includes(answer.columnCode)); 

// Clear all options
document.querySelectorAll(".form-check > input").forEach((radio) => {
  radio.checked = false;
})

// Checkboxes for physical store, online store, and none of them
let physicalStoreCheckbox = document.querySelector(`#q_FILTER_VISITS_card .form-check > input[value='1']`);
let onlineStoreCheckbox = document.querySelector(`#q_FILTER_VISITS_card .form-check > input[value='2']`);
let noneOfThemCheckbox = document.querySelector(`#q_FILTER_VISITS_card .form-check > input[value='99']`);

// Randomly choose one of the checkboxes based on conditions
if (visited_physical_store.length > 0 && visited_online_store.length > 0) {
  // Randomly choose between physical and online store
  let randomCheckbox = Math.random() < 0.5 ? physicalStoreCheckbox : onlineStoreCheckbox;
  randomCheckbox.checked = true;
} else if (visited_physical_store.length > 0) {
  // Only physical store visited
  physicalStoreCheckbox.checked = true;
} else if (visited_online_store.length > 0) {
  // Only online store visited
  onlineStoreCheckbox.checked = true;
} else {
  // None of them visited
  noneOfThemCheckbox.checked = true;
}

document.querySelector("#p_next").click();