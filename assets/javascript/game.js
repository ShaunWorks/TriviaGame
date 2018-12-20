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
    right: 0,
    questionsAnswered: 0,
    questionLimit: 5,
    questionCount: 0,
    curQuestion: new triviaBlock(),
    questions: [],

    fillQuestions: function () {
        $.each(blocks, function (key, value) {
            game.questions.push(value);
        })
        game.questions = shuffle(game.questions);
    },

    displayQuestion: function () {
        this.curQuestion = this.questions[this.questionCount];
        let options = shuffle(this.curQuestion.options);
        $("#quiz-title").text(this.curQuestion.title);
        $("#quiz-answers").empty();
        for (let i = 0; i < options.length; i++) {
            let optionButton = $(`<button>${options[i]}</button><br>`).addClass("quizButton btn btn-outline-primary");
            $("#quiz-answers").append(optionButton);
        };
        this.questionCount++;
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
            $("#quiz-title").html("Sorry that was wrong.")
        }
        $("#quiz-answers").empty();
        game.displayAnswer();
    },

    endGame: function () {
        $("#quiz-answers").empty();
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
        game.right = 0;
        game.questionsAnswered = 0;
        game.questionCount = 0;
        game.questions = shuffle(game.questions);
        game.displayQuestion();
    });
})