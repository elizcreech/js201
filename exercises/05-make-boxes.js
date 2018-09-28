// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
// function makeSquare (size){
//     var line = 0
//     var boxFiller = ''
//     var width = 0
//     while (line <= size){
//         while (width < size){
//             boxFiller = boxFiller+'*'
//             width++
//         }
//         console.log(boxFiller)
//         line++        
//     }
//     return boxFiller
// }
// makeSquare(10)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (size) {
    var line = 1
    var width = 1
    var boxEnd = '*'
    var boxFiller = '*'

    for (let i=1; i == size-1; i++){
        boxEnd = boxEnd+'*'
        console.log(boxEnd)
    }
    for (let j=1; j === size-1; j++){
        if (j === 1 || j === size){
            boxFiller = boxFiller+'*' 
        }
        else{
            boxFiller = boxFiller+' '
            console.log(boxFiller)
        }

    return boxFiller

}
makeBox(4)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
