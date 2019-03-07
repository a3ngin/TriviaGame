



$(document).ready(function () {


    const questions = [

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: "one",
        },


    ];

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var seconds = 120;
    var time;
    var messages =
    {
        correct: "You right!",
        incorrect: "Not today",
        outOfTime: "Out of Time",
        finished: "Lets see what you got"
    }


    $("#start").on("click", function () {
        console.log("clicked");
        $(this).hide();

        countdown();
        startCountdown();
        displayQuestions();
    })



    function countdown() {
        seconds = 5;
        $("#timer").html("<h3>Time Remaining: " + seconds + "</h3>");
        console.log(seconds);
        time = setInterval(startCountdown, 1000);

    }

    function startCountdown() {
        seconds--;

        $("#timer").html("<h3>Time Remaining: " + seconds + "</h3>");
        if (seconds < 1) {
            clearInterval(time);
            $("#game").hide();
            scoreboard()
        }

    }

function scoreboard(){
    $("#correctAnswers").html("<h3>Correct Answers: " + correct + "</h3>");
    $("#incorrectAnswers").html("<h3>Incorrect Answers: " + incorrect + "</h3>");
    $("#unansweredQuestions").html("<h3>Unanswered Questions: " + unanswered + "</h3>");
    $("#startOver").html("<button>start over?</button>");

};


    function displayQuestions() {
        for (i = 0; i < questions.length; i++) {
            let question = $("<p>" + questions[i].question + "<br>");
            $("#game").append(question);

            for (j = 0; j < questions[i].answers.length; j++) {
                let answers = $("<button>" + questions[i].answers[j] + "<br>");
                answers.attr("data", questions[i].answers[j]).addClass("answer");
                console.log(answers);
                $("#game").append(answers);
            }
        }
    };

});