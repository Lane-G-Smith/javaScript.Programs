var bottles = 99;

function onTheWall() {
    
      if (bottles >= 1)
      { console.log(bottles + " bottles of beer on the wall,"  + bottles  + " bottles of beer, take one down and pass it around, " + bottles + " bottles of beer on the wall ");
       bottles - 1;
    } else if (bottles < 1)  
      { console.log("no more bottles of beer on the wall, no more bottles of beer, take one down and pass it around, no more bottles of beer on the wall");
       bottles + 99;
    }    
    
}
