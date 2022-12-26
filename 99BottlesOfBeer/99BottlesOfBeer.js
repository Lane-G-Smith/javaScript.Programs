
let bottles = 99;
let playThrough = 1;

// log beers on wall. -1 beer, repeat till 2 beers
let onTheWall = () => {
   for (bottles == 99; bottles > 1; bottles--) {
      lyrics = (`${bottles} bottles of beer on the wall, ${bottles} bottles of beer, take one down and pass it around, ${bottles} bottles of beer on the wall`)
      console.log(lyrics);
   };
}
// log one beer on wall, sentence structure change, -1 beer
let lastBeer = () => {
   for (bottles == 1; bottles == 1; bottles--) {
   lyrics = (`${bottles} bottle of beer on the wall, ${bottles} bottle of beer, take it down and pass it around, ${bottles} bottle of beer on the wall`);
   bottles--;
   console.log(lyrics);
   }
}
// log 0 beers, end game, set beer on wall to 99(doesn't work)
let noBeer = () => {
   if (bottles == 0) {
      lyrics = ("no more bottles of beer on the wall, no more bottles of beer, can't take one down or pass it around, no more bottles of beer on the wall");
      console.log(lyrics);
      bottles == 99;
   };
}
//   restart 5 times (not working)
let playGame = () => 
{for (playThrough==1; playThrough < 5; playThrough++);
   onTheWall();
   lastBeer();
   noBeer();}

playGame();
//can't figure out how to append each new line
// need to slow down function loops to print slowly
// need to print output on ".lyrics" class button
// make so button push starts over
// make game repeat after finished
   