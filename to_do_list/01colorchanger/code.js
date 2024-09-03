//here, we are mostly given html, css and we need to write code for js
//how will acheive this?
//we need to select the elements(all buttons)
//then we need to select body(coz that is the aim)

const buttons = document.querySelectorAll('.button'); //querySelectorAll : selects all the buttons)
// console.log(buttons)  O/P:NodeList{0: {…}, 1: {…}, 2: {…}, 3: {…}}

const body = document.querySelector('body'); //directly selecting with tag name ("body")

//why using forEach() --> coz we got NodeList as o/p when logged (and in HTMLCollction forEach() is not present)
buttons.forEach(function (button) {
  // console.log(button);
  // now applying EventListener on this button (i.e onclick())
  button.addEventListener('click', function (eventObject) {
    //whenever, an event occurs, we have to carry that event, everywhere together(for increasing functionality and this eventObject also has many details). eventObject-> mouse event
    console.log(eventObject.target);
    if (eventObject.target.id === 'grey') {
      body.style.backgroundColor = eventObject.target.id; //we can initialise the wanted color here, but we want bg-color to change with the box, hence it will copy color of the box clicked, hence id is used.
    }
    if (eventObject.target.id === 'white') {
      body.style.backgroundColor = eventObject.target.id;
    }
    if (eventObject.target.id === 'blue') {
      body.style.backgroundColor = eventObject.target.id;
    }
    if (eventObject.target.id === 'yellow') {
      body.style.backgroundColor = eventObject.target.id;
    }
    if (eventObject.target.id === 'purple') {     //here, we didnt do it purple in css; hence box is still transparent, but changes bg-color coz we wrote color in JS
      body.style.backgroundColor = eventObject.target.id;
    }
  });
});


//try doing this with different appraoches
//  ---> such as using if-lse, switch-case statements.