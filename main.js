/*

Exercise: Write a basic HTML / JavaScript program that does the following

- In HTML, have a single text input field
- In HTML , have a button
- In JavaScript, have a function divides a number by 10
- In JavaScript, have a function that multiplies a number by 5
- When the button is clicked, call a JavaScript function that checks if the user has entered in a value in the input field
- If there is no value, put an appropriate message in an alert box telling the user to enter something
- If there is a value, and its numeric value is greater than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that divides by 10.
-If there is a value, and its numeric value is less than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5. Write the result of the calculation into the HTML document.Exercise: Write a basic HTML / JavaScript program that does the following

- In HTML, have a single text input field
- In HTML , have a button
- In JavaScript, have a function divides a number by 10
- In JavaScript, have a function that multiplies a number by 5
- When the button is clicked, call a JavaScript function that checks if the user has entered in a value in the input field
- If there is no value, put an appropriate message in an alert box telling the user to enter something
- If there is a value, and its numeric value is greater than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that divides by 10.
-If there is a value, and its numeric value is less than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5. Write the result of the calculation into the HTML document.
*/


    function divide(divNum) {
        return divNum / 10; 
    }

    function multiply(multiNum) {
        return multiNum * 5;
    }
   
var getValue = document.getElementsByName("convert")[0].value;
  console.log(getValue); 

      function valueChecker(output) {
            var outputToDom = document.getElementById("converted");
            var output;
       
           if(getValue == 0){
        output = "Please enter a number greater than 0!";
          }
      else if(getValue >= 10000)
      { 
         var newValue = divide(getValue);
          output =  "The answer:" + divide(getValue);
         console.log(output);
      }
      else if (getValue < 10000){
         var newValue = multiply(getValue);          
         output =  "The answer to less than 10000 is: " +  newValue;
         console.log(output);

      }
return outputToDom.innerHTML = "<br>" + output; 
   }




//console.log(valueChecker());

var button = document.getElementById("converter");

button.onclick = valueChecker();

 //outputToDom.innerHTML = "<br>" + valueChecker();



































