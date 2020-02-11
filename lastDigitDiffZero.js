function lastDigitDiffZero(n) {
    var arr = [];
    var factorial = 1;
    for (let a = 1; n >= a; a++) {
        factorial *=a;
    }
    arr = factorial.toString();
    //console.log(arr);
    for (let j = arr.length-1; j >= 0; j--) {
        if(arr[j]!='0'){
            return parseInt(arr[j]);
        }
        
    }
}
