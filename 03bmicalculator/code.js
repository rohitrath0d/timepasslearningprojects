  //for calcukating bmi we need a formula, which we can easily be found on google when needed
  //formula can be referred anytime.
  //basic approach is to how to handle this.

  //first problem to solve here: how to extract values from input(i.e. weight and height are input, here.) and this can be done through event only.

  //first we have to select the form? why because inside the form only there is a submit button (i.e. calculate button)

  const form = document.querySelector('form');
  //whenever form is submitted, then it is only submitted by (GET())type or (POST()) type
  //... and whenever a form is submitted, its values, is then sended to URL or SERVER
  //... so this action needs to be stopped, because we are not sending values to server
  //... so stop the default action of the form (which is Submit). how to do it?

  //this usecase will give u empty value
  // const weight = pacrseInt(document.querySelector('#height').value)

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value); //we get values in string, hence to convert into integer parseInt is used.
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); //parseInt is not need because this is not a value, only result, not wanting to send to server/url

    //we'll do some check now, if that check is found to be correct/valid, we'll add values in results

    //for adding values, innerText/innerHTML anything can be used.
    if (height === '' < 0 || isNaN(height)) {
      //old technique for NaN: if(height != NaN) || new technique: if(isNaN(height))
      results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      results.innerHTML = `<span> Result: ${bmi} </span>`;
      //print if values:  underweight, normal range, overwieght. DO it yourself
      if (bmi < 18.6) {
        results.innerHTML = `<span> under weight: ${bmi} </span>`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span> Normal Range: ${bmi} </span>`;
      } else {
        results.innerHTML = `<span> over weight: ${bmi} </span>`;
      }
    }
  });

  //analogy to understand...what is the difference b/w if wrote this querySelector() value for height and width outside and inside the form.
  //inside the form:  upon clicking submit(calculate), we directly need the values upon clicking that event. hence written inside
  //outside the form: if wrote values outside the script, whenever the page is loaded, an empty value is stored in height and weight
