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
            let optionButton = $(`<button>${options[i]}</button><br>`).addClass("quizButton btn btn-outline-primary")
            $("#quiz-answers").append(optionButton);
        };
    },

    displayAnswer: function () {
        this.questionsAnswered++;
        //console.log(game.questionsAnswered, game.questionLimit);
        if (this.questionsAnswered === this.questionLimit) {
            this.playing = false;
            $("#quiz-answers").empty();
            $("#quiz-title").html("Thanks for playing! Try again?")
            $("#message").html(`Quiz Over`);

        }
        else {
            setTimeout(function () {
                game.displayQuestion();
                $("#message").empty();
            }, 3000)
        }
    },

    answerCheck: function () {
        if ($(this).text() === game.curQuestion.answer) {
            //got right answer
            game.right++;
            $("#message").html("this is the right answer")

        }
        else {
            //got wrong answer
            game.wrong++;
            $("#message").html("this is the wrong answer")
        }
    },
}

$(document).ready(function () {

    game.fillQuestions();
    game.displayQuestion();
    $("#quiz-answers").on("click", "button", game.answerCheck);
})