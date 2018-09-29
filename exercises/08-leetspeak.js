// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"
function leetspeak(givenStr){
    var key = {A:4, E:3, G:6, I:1, O:0, S:5, T:7}
    var givenStrLen
    var newStr
    givenStrLen = givenStr.length 
    // parse through sting and look for match
    for(i=0; i<=givenStrLen; i++){
        givenChar = givenStr.charAt(i)
        console.log(givenChar)
        
    }
    return givenChar
}
leetspeak('Test')