let age = 15; 
alert("I am " + age + " years old.");

//ex #2
var visits = 14; 
alert("You have visited this site " + visits + " times.");
//ex#3
var birthYear = 2008;
alert("I was born in " + birthYear);
//ex#4
document.write("my birthday year is 2006\n data type of my decleared variable is number")
//ex#5
function makeWordsBold() {
    const paragraph = document.getElementById('text');
    // Replace specific words with bold versions
    paragraph.innerHTML = paragraph.innerHTML.replace("example", "<b>example</b>");
    paragraph.innerHTML = paragraph.innerHTML.replace("JavaScript", "<b>JavaScript</b>");
  }