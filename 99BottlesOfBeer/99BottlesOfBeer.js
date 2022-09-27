let bottles = 99;
let counter = 0;

function onTheWall() {
      if (bottles >= 1)
      { (counter ++);
         console.log(bottles + " bottles of beer on the wall,"  + bottles  + " bottles of beer, take one down and pass it around, " + bottles + " bottles of beer on the wall ");
       return (bottles = (bottles -= 1));
    } else if (bottles < 1)
      { (counter ++);
         console.log("no more bottles of beer on the wall, no more bottles of beer, take one down and pass it around, no more bottles of beer on the wall");
       return (bottles = (bottles + 99));
    }        
}

if (counter <= 200) {
   onTheWall(bottles, counter);
}
else console.log("The end");