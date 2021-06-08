//Business Logic//

function wordCounter(word) {
  return 1;
}
const text ="hello";
wordCounter(text);


function wordCounter(word) {
  return 2;
}
const text =["hello" , "there"];
wordCounter(text);


function wordCounter(text) {   
  if (text.trim().length === 0) {     
    return 0;   }   
  let wordCount = 0;   
  const wordArray = text.split(" ");   
  wordArray.forEach(function(element)  {
    if (!Number(element)){
      wordCount++;
    }
  });   
  return wordCount; 
} 

// Business Logic

//WordCounter()

wordCounter("hello, dan, i, am, 12");

function numberOfOccurencesInText(word,text) {
  if (text.trim().length ===0){
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount =0;
  wordArray.forEach(function(element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}
const text = "red blue red red red green";
const word = "red";
numberOfOccurencesInText(word,text);






