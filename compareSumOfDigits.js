function compareSumOfDigits(input){
    let le = 0;
    let chan = 0;
    for(let i =0; i < input.length; i++){
        if(input[i]%2 == 0){
            chan+=parseInt(input[i]);
        }
        else{
            le+=parseInt(input[i])
        }
    }
    return le - chan;
}
