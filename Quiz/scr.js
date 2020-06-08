
var questions = [
    {
    prompt: "What color are apples?\n(a) Red/Green\n(b) Purple\n(c) Orange",
    answer: "orange"
},
{
    prompt: "What color are bananas?\n(a) Red/Green\n(b) Purple\n(c) Yellow",
    answer: "c"
},
{
    prompt: "What color are manggo?\n(a) Green\n(b) Purple\n(c) Orange",
    answer: "a"
},
]

var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    }
    else{
        alert("Wrong!");
    }
}

alert("You Got " + score + "/" + questions.length);