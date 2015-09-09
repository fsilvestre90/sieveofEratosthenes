var prime = function(number) {

    var numbersArr = [];
    for(var n = 2; n < number; n++){
        numbersArr[n] = true;
    }

    var primes = [];
    var coefficient = 0;
    for(var i = 2; i <  Math.sqrt(number); i++) {
        var coefficient = i-2;
        if(numbersArr[i] == true) {
            for(var j = Math.pow(i,2); j < number; j += i) {
                numbersArr[j] = false;
            }
        }
    }
    for (var k = 2; k < numbersArr.length; k++) {
        if(numbersArr[k] == true) {
            primes.push(k);
        }
    }
    return primes;
}
