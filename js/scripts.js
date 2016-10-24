$(function(){
  var sentence = "";
  var sentenceWords = "";
  var newArray = [];
  var reverseArray=[];
  var reverseSentence ="";

////////////Back-End///////////

var wordPlay = function(){
  sentence = $("input#enterSentence").val();
  sentenceWords = sentence.split(" ");
  sentenceWords.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    }
  })
  reverseArray = newArray.slice();
  reverseArray.reverse();
  reverseSentence = reverseArray.join(" ");
  event.preventDefault();
}


///////////////Front-End/////////////////

$("#submitButton").click(function(event) {
  wordPlay();
  $("h2").show();
  $("#newSentence").text(reverseSentence);
  });
});
