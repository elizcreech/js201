// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
function factors (gNum){
    var i
    var factorArray = []
    for (i=1; i <=gNum; i++){
        factor = gNum/i
        remainder = gNum % i
        if (remainder === 0){
            factorArray[i]=factor
            console.log('count is '+i)
            console.log(factorArray[i]) 
        }
    }
    return factorArray
}
factors(888)
