const friend = 'BRUTUS'
const shiftValue = 3;

const alphabet = 'abcdefghijklmnopqrstuvwxyz'  // Step 1 Recall the latin alphabet variable from the previous exercise.

let encryptedName = "";

for(let i = 0; i < friend.length; i++){
const currentLetter = friend[i];
const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());  // Step 2 Use a to iterate each eltter of 'BRUTUS'. 
const newIndex = (currentIndex + shiftValue) % alphabet.length;     // Employ the Caesar Cipher technique to shift each letter by
encryptedName += alphabet[newIndex].toUpperCase();                  // the given value. Store the encrypted name in a variable.

}

// Question 1 - What Advantage does using a loop provide over manually encrypting each letter?

// Answer -  Using the loop method provides automation, it help us to process each letter of the name consecutively without redundant code
// without redundant code. It confirms a consistent encryption and can easily adapt to a name of any length


// Question 2 - Explain the role of % alphabet.length in our loop. How does it aid in the encryption 
// proceess?
// Answer - the modulus operator, % , make sure the sum of the current index and the shift value
// surpasses the alphabet's length, it wraps around to the start. for ex after 'z', we return to 'a', 
// guaranteeing continuous encryption.
