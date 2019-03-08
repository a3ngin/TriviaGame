
var x = 0
function saveanswers(val) {
    console.log(val);
}

$(document).ready(function () {


    const questions = [

        {
            question: "Who are you?",
            answers: ["anne", "dan", "stan"],
            correctAnswer: [1, 0, 0],
            number: "question1",
        },

        {
            question: "What's your fav color?",
            answers: ["green", "pink", "blue"],
            correctAnswer: [0, 1, 0],
            number: "question2",
        },

        {
            question: "What's your birth month?",
            answers: ["june", "july", "august"],
            correctAnswer: [0, 0, 1],
            number: "question3",
        },

        {
            question: "what color are your pants",
            answers: ["blue", "black", "orange"],
            correctAnswer: [0, 1, 0],
            number: "question4",
        },

        {
            question: "Where r u",
            answers: ["mcdonalds", "publix", "home"],
            correctAnswer: [0, 0, 1],
            number: "question5",
        },

        {
            question: "how are you?",
            answers: ["good", "two", "three"],
            correctAnswer: [1, 0, 0],
            number: "question6",
        },

        {
            question: "do you have nailpolish",
            answers: ["huh", "yes", "what"],
            correctAnswer: [0, 1, 0],
            number: "question7",
        },

        {
            question: "how old are you?",
            answers: ["twentythree", "hundred", "hunnit"],
            correctAnswer: [1, 0, 0],
            number: "question8",
        },

        {
            question: "what color is your hair?",
            answers: ["green", "orange", "blondeish"],
            correctAnswer: [0, 0, 1],
            number: "question9",
        },

        {
            question: "Who are you?",
            answers: ["one", "two", "three"],
            correctAnswer: [1, 0, 0],
            number: "question10",
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
        $("#submit").hide();
        scoreboard();
        $('#startOver').on("click", function () {
            $(this).hide();
            displayQuestions();
            countdown();
            startCountdown();

        })
    }

console.log(questions[2])

    function countdown() {
        seconds = 10;
        $("#timer").html("<h3>Time Remaining: " + seconds + "</h3>");
        console.log(seconds);
        time = setInterval(startCountdown, 1000);

    }

    function startCountdown() {
        seconds--;

        $("#timer").html("<h3>Time Remaining: " + seconds + "</h3>");
        if (seconds < 1) {
           
            // getRadioVal();
            clearInterval(time);
            $("#game").hide();
            scoreboard();
            startover();
            
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
                let value = questions[i].correctAnswer[j];
                let name1 = questions[i].number;
                console.log(name1," ",value);
                practice= "<label> <input type= radio name= " +name1+ " value= " +value+ "> "+questions[i].answers[j]+ "</label ";
                console.log(practice);
                $("#game").append(practice);
                console.log(name1," ",value);
                //let answers = $("<button>" + questions[i].answers[j] + "<br>");
                //answers.attr("data", question[i]answers[j].addClass("answer");
                //$("#game").append("<button onclick=saveanswers()>", questions[i].answers[j], "</button>");
                //answers.attr("data", questions[i].answers[j]).addClass("answer");
                // console.log(answers);
                // $("#game").append(answers);
            }

            
        }
        $("#getValue").append("<button>Submit</button>");
        $("#getValue").on("click", function(){
            getRadioVal();
        });
    };
    
});

function getRadioVal () {
    
    for (i=0; i<questions.length; i++) {
        var radioVal= $("input[name=question[i].number]:checked").val();
        console.log(radioVal + "Look HEre");
        if (radioVal == 1){ correct++;}
        if (radioVal == 0){ incorrect++;}
        else {unanswered++;}
        
    }
    console.log(correct,incorrect,unanswered);
};




   // let radioValue=$("input[name='question1']:checked").val();
   //console.log(radioVAlue);

   
   // For (i, i<questions.length, i++){
    //let name1= question[1].number;
    //let useranswer = $("input[name='question_10']:checked").val();

    // $(document).on("click", saveanswers(event){

    //     let userAnswer = $(this).attr("data", );
    //     console.log("The user answer is: " + userAnswer);
    



    //     if(userAnswer = questions[i].answers) {
    //     correct++;
    //     console.log(userAnswer);
    // })
    // });