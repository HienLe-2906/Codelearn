function countZeroDigit(a, b){
    let count =0;
    for(let i = a; i <=b; i++){
        let test = i.toString();
        for(let j = 0; j < test.length; j++){
            if(test[j] == '0'){
                count++;
            }
        }
    }
    return count;
}
