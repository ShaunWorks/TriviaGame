
let game = {
    right: 0,
    wrong: 0,
    curQuestion: new triviaBlock(),
    questions: [],
    timer: null,

    fillQuestions: function () {
        $.each(blocks, function (key, value) {
            game.questions.push(value);
        })
    },

    displayQuestion: function () {
        this.curQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
        $("#quiz-title").text(this.curQuestion.title);
        $("#quiz-answers").empty()
        for (let i = 0; i < this.curQuestion.options.length; i++) {
            $("#quiz-answers").append(`<li>${this.curQuestion.options[i]}`);
        };
    },

    answerCheck: function () {
        if ($(this).text() === game.curQuestion.answer) {
            //got right answer
            game.right++;
            console.log("right:", game.right);
            setTimeout(function() {
                game.displayQuestion();
            }, 3000)
            console.log("this is the right answer");
        }
        else {
            //got wrong answer
            game.wrong++;
            console.log("wrong:", game.wrong);
            setTimeout(function() {
                game.displayQuestion();
            }, 3000)
            console.log("this is the wrong answer");
        }
    },


}

$(document).ready(function () {

    game.fillQuestions();
    game.displayQuestion();

    $("ul").on("click", "li", game.answerCheck);
})