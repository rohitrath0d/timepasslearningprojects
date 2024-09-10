//generate a random from a random hex value
//hex value range: 0 to 9 and A to F

const randomColor = function () {
    const hexVal = '0123456789ABCDEF'; //0 to 9 and A to F
    let color = '#'; //e.g. for white: #ffffff | used 'let' to able to change
    //to select a random color, first learn to select a random number(check line 16)
    for (let i = 0; i < 6; i++) {
      color += hexVal[Math.round(Math.random() * 16)]; // += (to constantly add the values)
    }
    return color;
  };
  
  // console.log(randomColor());
  let interval;
  const startChangingColor = function () {
      // document.body.style.backgroundColor = randomColor();   here, interval id is already null on lin 15, hence initalising this would start, but not stop the color, so, if(!interval) -- would check if its null,yes then execute the conditon (its like a safety check)
  
    if (!interval) {
      interval = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
  
      //bg color should change when click on starting
      document.body.style.backgroundColor = randomColor(); //o/p verified, but color not running continuously, to run continuously use setInterval()
    }
  };
  const stopChangingColor = function () {
    clearInterval(interval);
    interval = null; //resetting the bg
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  //to select a random number: on line 9 | we can also use Math.floor() instead of Math.round()
  // console.log(Math.round(Math.random() * 16)); //how to generate a random value? using Math.random()
  //multiplying by 16 coz 0 to 9 and A to F is 16 value (i.e. hex(because hexagonal number(here, 16) does not have a perfect square), and not doing (+1) in the end of the operation because in case 0 is the result then we can use that value, (i.e 0 to 9 and A to F)
  