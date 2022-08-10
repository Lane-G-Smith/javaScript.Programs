alert("I am the magical AI 8 ball. Ask me any yes or no questions and I will give you an answer");
prompt("What is your question?");

let n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

 if (n >= 91 && n <= 100) {
     alert("ask again later");
 }
 if (n >= 81 && n <= 90) {
     alert("unlikely");
 }
 if (n >= 71 && n <= 80) {
     alert("yes");
 }
 if (n >= 61 && n <= 70) {
     alert("no");
 }
 if (n >= 51 && n <= 60) {
     alert("probably");
 }
 if (n >= 41 && n <= 50) {
     alert("Sorry, I don't know");
 }
 if (n >= 31 && n <= 40) {
     alert("whatever you think might be true, is true");
 }
 if (n >= 21 && n <= 30) {
     alert("whatever you think might be true, is false");
 }
 if (n >= 11 && n <= 20) {
     alert("ask again 2 more times for the answer");
 }
 if (n >= 1 && n <= 10) {
     alert("I can't answer that right now");
 }
