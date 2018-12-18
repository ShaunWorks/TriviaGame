
let game = {
    curQuestion: new triviaBlock(),
    questions: [],

    fillQuestions: function () {
        $.each(blocks, function (key, value) {
            game.questions.push(value);
        })
    },

    displayQuestion: function () {
        this.curQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
        $("#quiz-title").text(this.curQuestion.title);
        for (let i = 0; i < this.curQuestion.options.length; i++) {
            $("#quiz-answers").append(`<li>${this.curQuestion.options[i]}`);
        };
    },

    answerCheck: function () {
        if ($(this).text() === game.curQuestion.answer) {
            //got right answer
            
            console.log("this is the right answer");
        }
        else {
            //got wrong answer
            console.log("this is the wrong answer");
        }
    },


}

$(document).ready(function () {

    game.fillQuestions();
    game.displayQuestion();

    $("ul").on("click", "li", game.answerCheck);
})