// Get the saved competitor name
let competitor = response.answers.find(answer => answer.questionCode == "COMPETITOR").value;

// Function to replace special characters encoding 
function replaceHtmlEntitiesWithRealCharacters(text) {
  let new_text = text.replace(/&#[0-9]+;/g, (match) => String.fromCharCode(match.slice(2, -1)));
    return(new_text);
}

competitor = replaceHtmlEntitiesWithRealCharacters(competitor);

// Ovewrites the competitor placeholder
document.querySelector("#competitor").innerText = competitor;