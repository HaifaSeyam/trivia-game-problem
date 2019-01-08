$(document).ready(function() {
//Questions, options, and answers as an array of objects
var questions = [
    {
        question: "1. Dexter Morgan was played by what talented actor?",
        options: {
            a: "Joseph Gordon-Levitt", 
            b: "Michael C. Hall", 
            c: "Gary Oldman"
        },
        answer: "b"
    },
    {
        question: "2. In what year did 'Dexter' premiere?",
        options: {
            a: "2003", 
            b: "2006", 
            c: "2009"
        },
        answer: "b"
    },
    {
        question: "3. What was the main ingredient in most of the gallons and gallons of pretended blood used on the show?",
        options: {
            a: "Maple syrup", 
            b: "Corn syrup", 
            c: "Coconut oil"
        },
        answer: "a"
    },
    {
        question: "4. Jennifer Carpenter played Dexster's adopted sister Debra. What releationship did Jinnefer Carpenter and Michael C. Hall share in real life?",
        options: {
            a: "They are cousins", 
            b: "They are actually sister and brother", 
            c: "They were married"
        },
        answer: "c"
    },
    {
        question : "5. What character on the show was loosely based on real-life BTK serial killer Dennis Rader?",
        options: {
            a: "Arthur Mitchell", 
            b: "Harry Morgan", 
            c: "Special Agent Frank Lundy"
        },
        answer: "a"
    }
];

//Variable to set the timer limit
var timer = 31;
var intervalId;

/* When Start Btn is cliked, the questions will start to be displayed for 30 sec each. 
As long as the timer is not equal to zero, keep the question displayed on the screen.
If the user clicked on an answer:
- the timer will stop immediately.
- check the answer, if it is correct, a message says "CORRECT" should be displayed on the screen for 10 sec.
then the second question should be displayed without clicking on any button.
- If the answer is not correct, a message says "WRONG!! ... the right answer is ' ' " should be displayed
on screen for 10 sec. then move to the next question */

$("#startBtn").on("click", function(){
    $(this).hide();
    for (var i = 0 ; i < questions.length; i++) {
        runTimer();
        displayQuestion(questions[i]); 
    }
});


//I need a function to display the question that will be called inside a for loop
//This function takes an array element (object in this case) as an argument

function displayQuestion(Q) {
    $("#displayQuestion").html(Q.question)
                         .css({"color":"maroon", "font-family":"Comic Sans MS", "font-size":"30px", 
                                "text-align":"left", "margin-left": "20px", "margin-top":"10px"});
    $("#displayOptions").html("<div id = 'optionA'>" + "a. " + Q.options.a + "</div><br><br>" 
                                + "<div id='optionB'>" + "b. " + Q.options.b + "</div><br><br>" 
                                + "<div id='optionC'>" + "c. " + Q.options.c + "</div>");
    $("#optionA").css({"color":"maroon", "font-family":"Comic Sans MS", "font-size":"20px", "margin-top":"20px",
                         "margin-left":"20px", "cursor":"pointer"})
                 .hover(
                    function() {//mouse over
                        $(this).css("color", "red")}, 
                    function() {//mouse out
                        $(this).css("color", "maroon")
                    })
                 .on("click", function(){
                    if (Q.answer == "a"){
                        $("#displayAnswer").html("CORRECT!")
                                           .css({"color":"green", "font-family":"Comic Sans MS", 
                                           "font-size":"50px", "margin-top":"20px", "margin-left":"20px",
                                           "text-align":"center"});
                    } else {
                        $("#displayAnswer").html("WRONG!" + "<br>" + "The Correct Answer is: " + Q.answer)
                                           .css({"color":"red", "font-family":"Comic Sans MS", 
                                           "font-size":"50px", "margin-top":"20px", "margin-left":"20px",
                                           "text-align":"center"});
                    }
                    stop();
                });
    $("#optionB").css({"color":"maroon", "font-family":"Comic Sans MS", "font-size":"20px", 
                        "margin-left":"20px", "cursor":"pointer"})
                 .hover(
                    function() {//mouse over
                        $(this).css("color", "red")}, 
                    function() {//mouse out
                        $(this).css("color", "maroon")
                    })
                 .on("click", function(){
                    if (Q.answer == "b"){
                        $("#displayAnswer").html("CORRECT!")
                                           .css({"color":"green", "font-family":"Comic Sans MS", 
                                           "font-size":"50px", "margin-top":"20px", "margin-left":"20px",
                                           "text-align":"center"});
                    } else {
                        $("#displayAnswer").html("WRONG!" + "<br>" + "The Correct Answer is: " + Q.answer)
                                           .css({"color":"red", "font-family":"Comic Sans MS", 
                                           "font-size":"50px", "margin-top":"20px", "margin-left":"20px",
                                           "text-align":"center"});
                    }
                    stop();
                });
    $("#optionC").css({"color":"maroon", "font-family":"Comic Sans MS", "font-size":"20px", 
                        "margin-left":"20px", "cursor":"pointer"})
                 .hover(
                    function() {//mouse over
                        $(this).css("color", "red")}, 
                    function() {//mouse out
                        $(this).css("color", "maroon")
                    })
                 .on("click", function(){
                    if (Q.answer == "c"){
                        $("#displayAnswer").html("CORRECT!")
                                           .css({"color":"green", "font-family":"Comic Sans MS", 
                                           "font-size":"50px", "margin-top":"20px", "margin-left":"20px",
                                            "text-align":"center"});
                    } else {
                        $("#displayAnswer").html("WRONG!" + "<br>" + "The Correct Answer is: " + Q.answer)
                                           .css({"color":"red", "font-family":"Comic Sans MS", 
                                           "font-size":"50px", "margin-top":"20px", "margin-left":"20px",
                                           "text-align":"center"});
                    }
                    stop();
                });
}

//I need a function that starts the timer for each question
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    //Decrease timer by one.
    timer--;
    //Display the timer in the #displayTimer tag.
    $("#displayTimer").html("Time remaining: " + timer)
                      .css({"color":"red", "font-family":"Comic Sans MS", "font-size":"25px", 
                                "text-align":"left", "margin-left": "300px"});
    //Once timer hits zero...
    if (timer === 0) {
    //.. Run the stop function
      stop();
    //Alert the user that time is up.
    $("#displayTimer").show().html("Time's Up")
                      .css({"margin-left":"330px", "font-size":"35px"});
    }
  }

  function stop() {
    //Clear our intervalId
    //We just pass the name of the interval
    //to the clearInterval function.
    clearInterval(intervalId);
    $("#displayTimer").hide();
    $("#displayQuestion").hide();
    $("#displayOptions").hide();
  }
});
