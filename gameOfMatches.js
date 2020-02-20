//https://codelearn.io/training/detail?id=19528

function gameOfMatches(n) {
    if (n <= 6) {
        return 'Ngoc'
    }
    if (n % 7 == 0 || (n - 8) % 7 == 0) {
        return 'Phong'
    }
    return 'Ngoc'
}

//vì chỉ đi 2,3 hoặc 5, vì Ngọc luôn  đi trước nên cứ n <=6 thì ngọc đi trc và đi 5 thì luôn thắng
//