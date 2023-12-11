document.querySelector("body").style.display = "none";

// Get all radio button elements that match the query selector
const radioButtons = document.querySelectorAll('.form-check > input[type="radio"]');

// Generate a random index within the range of available radio buttons
const randomIndex = Math.floor(Math.random() * radioButtons.length);

// Select the random radio button element
const randomRadioButton = radioButtons[randomIndex];

// Set the 'checked' property to true
randomRadioButton.checked = true;

document.querySelector("#p_next").click();