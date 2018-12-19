function shuffle(arr) {
    let array = arr.slice(0);
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let game = {
    playing: true,
    right: 0,
    wrong: 0,
    questionsAnswered: 0,
    questionLimit: 5,
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
        let options = shuffle(this.curQuestion.options);
        $("#quiz-title").text(this.curQuestion.title);
        $("#quiz-answers").empty();
        for (let i = 0; i < options.length; i++) {
            let optionButton = $(`<button>${options[i]}</button><br>`).addClass("quizButton btn btn-outline-primary");
            $("#quiz-answers").append(optionButton);
        };
    },

    displayAnswer: function () {
            setTimeout(function () {
                game.questionsAnswered++;
                if (game.questionsAnswered !== game.questionLimit)
                    game.displayQuestion();
                else
                    game.endGame();
            }, 3000);
    },

    answerCheck: function () {
        if ($(this).text() === game.curQuestion.answer) {
            game.right++;
            $("#quiz-title").html("You got it right!")
        }
        else {
            game.wrong++;
            $("#quiz-title").html("Sorry that was wrong.")
        }
        $("#quiz-answers").empty();
        game.displayAnswer();
    },

    endGame: function () {
        $("#quiz-answers").empty();
            this.playing = false;
            $("#quiz-answers").empty();
            $("#quiz-title").html(`You got ${this.right} question(s) right out of ${this.questionLimit}.`);
            let restartButton = $("<button>").text("Play Again?").addClass("quizButton btn btn-outline-secondary");
            $("#message").append(restartButton);
    },
}

$(document).ready(function () {
    game.fillQuestions();
    game.displayQuestion();
    $("#quiz-answers").on("click", "button", game.answerCheck);
    $("#message").on("click", "button", function() {
        $("#message").empty();
        game.questionsAnswered = 0;
        game.displayQuestion();
    });
})