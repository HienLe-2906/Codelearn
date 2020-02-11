function factorSum(n) {
    var sum =0;
    if(checkPrime(n)==true){
        return n;
    }
    else {
        for(let i = 0; i < n; i++){
            if(checkPrime(i)&& n%i==0){            
                    sum +=i;
                    n /=i;                       
            }
        }

        if(checkPrime(sum)) return

    }
}

function checkPrime(a) {
    if(a ==2 ){
        return true;
    }
    else if (a > 2) {
        for (let i = 2; i < Math.sqrt(a); i++) {
            if (a % i == 0) {
                return false;
            }
            return true;
        }
    }
    return false;
}
