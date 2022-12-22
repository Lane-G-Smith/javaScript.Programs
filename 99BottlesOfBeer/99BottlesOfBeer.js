let bottles = 99;
let playThrough = 3;
let lyrics = document.getElementsByClassName("lyrics").innerHTML;
let party = document.getElementsByClassName("play-btn");

// log beers on wall. -1 beer, repeat till 2 beers
function onTheWall() {
   for (bottles == 99; bottles > 1; bottles--) {
      lyrics = (`${bottles} bottles of beer on the wall, ${bottles} bottles of beer, take one down and pass it around, ${bottles} bottles of beer on the wall`)
      console.log("one");
   };
}
// log one beer on wall, sentence structure change, -1 beer
function lastBeer() {
   if (bottles == 1) {
      lyrics = (`${bottles} last bottle of beer on the wall, ${bottles} last bottle of beer, take it down and pass it around, ${bottles} last bottle of beer on the wall`) , (bottles--)
      console.log("two");
   };
}
// log 0 beers, end game, set beer on wall to 99(doesn't work)
function noBeer() {
   if (bottles == 0) {
      lyrics = ("no more bottles of beer on the wall, no more bottles of beer, can't take one down or pass it around, no more bottles of beer on the wall"),
      console.log("three"),
      bottles == 99;
   };
}
// restart 5 times (not working)
function playGame() {
for ((playThrough==1); (playThrough < 5); (playThrough++)) {
   onTheWall();
   lastBeer();
   noBeer();
   }
}
playGame();
//can't figure out how to append each new line
// need to slow down function loops to print slowly
// need to print output on ".lyrics" class button
// make so button push starts over
// make game repeat after finished