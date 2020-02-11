function checkPalindrome(inputString) {
    var string1;
    var string2;
    if (inputString.length % 2 == 0) {
        string1 = inputString.slice(0, inputString.length / 2);
        string2 = inputString.slice(inputString.length / 2);
    }
    else {
        string1 = inputString.slice(0, inputString.length / 2);
        string2 = inputString.slice(inputString.length / 2 + 1);
    }

    // console.log(string1);
    // console.log(string2);

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] != string2[string1.length-i-1]) {
            // console.log(string1[i]);
            // console.log(string2[string1.length-i-1]);
            return false;
        }
    }
    return true;
}