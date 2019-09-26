// Below given Texts will print in the console, So you can open console by pressing F12 key -> console

/*
Hello Naseem
Good Bye Sheikh
Good Bye Zia
Good Bye Salman
Hello Ravi
Hello Shashank
Hello Lattika
Hello Pankaj
Hello Laxhmi
Good Bye Jimmy
*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// (Note, Step 2 will be done in the SpeakHello.js file.)

(function() {
	var names = ["Naseem", "Sheikh", "Zia", "Salman", "Ravi", "Shashank", "Lattika", "Pankaj", "Laxhmi", "Jimmy"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.

for (var i = 0; i < names.length; i++) {
     var name //= names[i];
	 
  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
   var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter == "j") {
	byeSpeaker(names[i]);
  } else {
	helloSpeaker(names[i])
  }
}
})();
