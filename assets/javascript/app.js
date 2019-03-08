



$(document).ready(function () {


    const questions = [

        {
            question: "Who are you?",
            answers: ["anne", "dan", "stan"],
            correctAnswer: "anne",
        },

        {
            question: "What's your fav color?",
            answers: ["green", "pink", "blue"],
            correctAnswer: "pink",
        },

        {
            question: "What's your birth month?",
            answers: ["june", "july", "august"],
            correctAnswer: "august",
        },

        {
            question: "what color are your pants",
            answers: ["blue", "black", "three"],
            correctAnswer: "black",
        },

        {
            question: "Where r u",
            answers: ["mcdonalds", "publix", "home"],
            correctAnswer: "home",
        },

        {
            question: "how are you?",
            answers: ["good", "two", "three"],
            correctAnswer: "good",
        },

        {
            question: "do you have nailpolish",
            answers: ["huh", "yes", "what"],
            correctAnswer: "yes",
        },

        {
            question: "how old are you?",
            answers: ["twentythree", "hundred", "hunnit"],
            correctAnswer: "twentythree",
        },

        {
            question: "what color is your hair?",
            answers: ["green", "orange", "blondeish"],
            correctAnswer: "blondeish",
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


    $("#start").on("click", function () {
        console.log("clicked");
        $(this).hide();

        countdown();
        startCountdown();
        displayQuestions();
    })
    function startover() {      
        $("#game").hide();
        scoreboard();
    $('#startOver').on("click", function(){
        $(this).hide();
        displayQuestions();
        countdown();
        startCountdown();
        
    })
}



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
            startover()
        }

    }

    function scoreboard() {
        $("#correctAnswers").html("<h3>Correct Answers: " + correct + "</h3>");
        $("#incorrectAnswers").html("<h3>Incorrect Answers: " + incorrect + "</h3>");
        $("#unansweredQuestions").html("<h3>Unanswered Questions: " + unanswered + "</h3>");
        $("#startOver").html("<button id='startOver'>start over?</button>");

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


    $(document).on("click", ".answer", function (event) {

        let userAnswer = $(this).attr("data");
        console.log("The user answer is: " + userAnswer);



        if (userAnswer === questions[i].answers) {
            correct++;
            console.log(userAnswer);
        }

    });
    




});

// if (userChoice == answer) {
//     correct++

// }