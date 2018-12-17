function triviaBlock(title, questions) {
    this.title = title;
    this.questions = questions;
}

let blocks = {
    q1: new triviaBlock(
        "Who is best girl?",
        [
            "Sherelle Thomas",
            "Sherelle Thomas",
            "Sherelle Thomas",
            "Sherelle Thomas"
        ]
    )
}

$(function () {
    $("#quiz-title").text(blocks.q1.title);
    function displayQuestions(questions) {
        for (let i = 0; i < questions.length; i++) {
            $("#quiz-answers").append(`<li>${questions[i]}`);
        };
    }

    displayQuestions(blocks.q1.questions);
})




