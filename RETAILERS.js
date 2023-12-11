// Take answer codes from FILTER_1 and write them into the SCHEMA_1
document.querySelector("#p_SCHEMA_1_1").value = Array.from(document.querySelectorAll("#p_FILTER_1 .form-check > input")).map(checkbox => checkbox.value);

function recode({ question_code, filter, dictionary, test_mode} = {}) {
    var question_card = document.querySelector("#q_" + question_code + "_card");
    var options_container = question_card.querySelector("#p_" + question_code);
    var form_checks = question_card.querySelectorAll(".form-check");
    var answer_options = {};
    form_checks.forEach((form_check, index) => {
        var input = form_check.querySelector("input");
        var code = input.value;
        var label = form_check.querySelector("label > div > div").innerText;
        var open_text = form_check.querySelector("label > div:nth-child(2) > input");
        answer_options[code] = { "form_check": form_check, "input": input, "label": label, "open_text": open_text };
    });

    // Clear all the options
    for (let [code, value] of Object.entries(answer_options)) {
        value.input.checked = false;
    }

    // Check options according to each region/country in hashmap dictionary
    response.answers.forEach((answer) => {
        if (answer.questionCode == filter) {
            var elements = dictionary[answer.code];
            for (let [code, value] of Object.entries(answer_options)) {
                if (elements.includes(Number(code))) {
                    value.input.checked = true;
                }
            }
        }
    });

    if(test_mode === undefined || test_mode == false){
        // Hides the page and go to next page
        document.querySelector("body").style.display = "none";
        document.querySelector("#p_next").click();
    } else if(test_mode == true){
        // Shows the page if testing
        document.querySelector("body").style.display = "flex";
    }  
}

// Recode retailer list based on the selected COUNTRY
recode({
    question_code: "FILTER_1",
    filter: "COUNTRY",
    dictionary: {
        /* answer codes selected in filter : [list of answer codes in this question to be selected]*/
        1: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,99], // Master (English)
        2: [1,3,7,12,14,15,20,22,23,32,35,37,38,40,43,44,99], // Norway
        3: [1,2,10,11,14,15,20,21,22,24,33,36,37,38,39,43,44,99], // Sweden
        4: [1,6,15,17,22,24,26,27,28,29,33,37,38,42,43,44,99], // Finland
        5: [1,4,5,8,9,13,14,15,16,18,19,22,25,30,31,34,41,43,44,45,99] // Denmark
    },
    test_mode : false
});