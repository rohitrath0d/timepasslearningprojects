// what to do in this project?
// display ur local time

//how to display time? we had to have something to dsiplay time.
//take clock as reference and display it here.

//now, how to take clock as reference? (can also use querySelector or getElementById too)
// document.querySelector('#clock')

document.getElementById('clock');

//now, we have to display clock, not only display but it should change at real time(i.e. Digital Clock)

//how to display a clock:
// let date = new Date()
// console.log(date.toLocaleTimeString()) --> here, we got the clock with method toLocaleTimeString(), but in console, that too have to refresh it everytime for updated time.

//here, we have to know about setInteval()
// setInterval --> it controls the javascript events. i.e.put intervals to events.  (this event, we have just have to define interval with the given method (e.g. toLocaleTimeString, here), and after that interval this will continuously run the program.

setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString()); //problem here is, its still running in console, we had to do it on that yellow box at runtime.

  //i didnt wanted to run this in console, i wanted to update the document, its node has to be updated every second
  clock.innerHTML = date.toLocaleTimeString();
  //now the node is updating every second, coz method is running every second.
}, 1000); //1000ms - 1second
