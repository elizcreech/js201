// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare (size){
    var line = 0
    var boxFiller = ''
    var width = 0
    while (line <= size){
        while (width < size){
            boxFiller = boxFiller+'*'
            width++
        }
        console.log(boxFiller)
        line++        
    }
    return boxFiller
}
makeSquare(10)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
function makeBox (width, height){
    var boxEnds = '*'
    var boxMiddle = '*'
    var width = 6
    var height = 4
    var i
    var j
    var k
    //Compose the box end lines
    console.log('this is a test')
    for(i=1; i <=width-1; i=i+1)
        {
        boxEnds = boxEnds+'*'
    }
    //Compose the box middle lines
    for(j=1; j <=width-2; j++){
        boxMiddle = boxMiddle+' '
    }
    boxMiddle = boxMiddle+'*'
    
    //Compose the box line by line
    for(k=1; k <=height; k++){
        if((k===1) || (k===height)){
            console.log(boxEnds)
        } else {
            console.log(boxMiddle)
        }
    }
    return boxEnds
}
makeBox(6,4)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
function makeBanner (someText){
    var bannerText    
    var lengthOfText = someText.length
    console
    var headerFooter = ''
    var i
    // Compose the header and footer
    for(i=1; i <= lengthOfText+4; i++)
    {
        headerFooter = headerFooter+'*'
    } 
    // Compose the text line of the banner
    bannerText = '* '+someText+' *'
    //Print the banner
    console.log(headerFooter)
    console.log(bannerText)
    console.log(headerFooter)
    return bannerText
}
makeBanner('Welcome to DigitalCrafts')