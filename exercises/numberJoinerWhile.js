// function numberJoinerWhile (startNum, endNum){
//    var retString = startNum.toString()
//    console.log(retString)
//    console.log(typeof retString)

//    i = startNum
//    while (i < endNum) {
//        retString = retString+'_'+(i+1)
//       i++
//       console.log(retString)  
//    }
//    console.log(retString)
//    return retString
// }
// numberJoinerWhile(1, 1)

// function numberJoinerFor (startNum, endNum){
//     var retString = startNum
//      for (var i=startNum+1; i<endNum+1; i++) {
//         retString = retString+'_'+(i)
//     }
//     console.log(retString)
//     return retString
// }
// numberJoinerFor(1,1)

function numberJoinerFancy (startNum, endNum, separator){
    if (separator === undefined) separator ='_'
    var i = startNum
    var retString = startNum.toString()
    while (i < endNum) {
        retString = retString+separator+(i+1)
        i++
    }
    console.log(retString)
    return retString
}
numberJoinerFancy(1,10, '~~~')