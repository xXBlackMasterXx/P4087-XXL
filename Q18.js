let target = document.querySelector("#q_Q18_card");
let button = document.querySelector("#p_Q18_99");
target.appendChild(button);
document.querySelector("#q_Q18_99_card").remove();

let inputs = target.querySelectorAll("#q_Q18_card > div > div > div > div > div.linear-scale__radio-holder.btn-group.btn-group-toggle > div > label");
button.addEventListener("click", () => {
  console.log(inputs);
  if(button.querySelector(".form-check > input").checked) {
      inputs.forEach((input) => {
          input.classList.remove("focus", "btn-outline-primary");
          input.classList.add("btn-outline-secondary", "active");
          input.querySelector("input").checked = false;
          input.querySelector("input").disabled = true;
        
      });
  } else {
    inputs.forEach((input) => {
          input.classList.add("btn-outline-primary");
          input.classList.remove("btn-outline-secondary", "active");
          input.querySelector("input").disabled = false;
        
      });
  }
});

let next_button = document.querySelector("#p_next");
next_button.addEventListener("click", (e) => {
  let checks = document.querySelectorAll("#q_Q18_card > div > div > div > div > div.linear-scale__radio-holder.btn-group.btn-group-toggle > div > label.active").length;
  if(!button.querySelector(".form-check > input").checked && checks != 17){
    e.preventDefault();
    alert("Please, select an option in missing rows");
  }
});