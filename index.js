function isPalindrome(word) {
  // Write your algorithm here
  
  //Step 2.
  let splitString = word.split("");
  
  //Step 3.
  let reverseArray = splitString.reverse();
  
  //Step 4.
  let joinArray = reverseArray.join("");

  if(joinArray === word){
    return true
  } else {
    return false
  }

  //Step 5.
// A function to serialize  the arrays into strings and compare them

// A function to extract value as an array and compare them
// for (let i = 0; i < splitString.length; i++) {

//           if (splitString[i] === reverseArray[i]) {
//               return true;
//           } else {
//               return false;
//           }
//       }
  

  if (splitString == reverseArray.join("")){
    return true
  } else{
    return false
  }

}

/* 
  Add your pseudocode here

 Step 1. describe a function that will take the name or word to be checked

 Step 2. Use the split("") method to return the letters of the word in a new array

 Step 3. Use the reverse() method to reverse the newly created array

 Step 4. USe the join() method to join all elements of the reverse array into a string

 Step 5. Compare the forward and backward string

 Full optimized code within function: return word.split("").reverse().join("");
use method to change spelling of word for front to back and back to front
if statement isMatched:
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
